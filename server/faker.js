const faker = require('faker');
const sql   = require('./db');

class Faker{

createUser(){
	const user = {};
	user.username = faker.name.findName();
	user.email = faker.internet.email();
	user.avatar = faker.image.avatar();
	user.password = '$2b$10$EUKsojp3QcMI7J1Mvdt71OA3D4guo7Q2SGwrTh5i33qFZhRITI.gG';
	return user;
}

createBio(){
	let  dt = new Date();
	const gender = ['Male','Female'];
	const bio = {};
	bio.phone = faker.phone.phoneNumber();
	bio.email = faker.internet.email();
	bio.address = `${faker.address.country()}, ${faker.address.streetAddress()}`;
	bio.birth_date =  (faker.date.past(20, '2005-01-01')).getFullYear();
	bio.gender = gender[Math.round(Math.random())];
	bio.education = `University of ${faker.address.city()}`;
	bio.occupation = faker.company.companyName();
	bio.about = faker.lorem.sentences();
	bio.credo = faker.lorem.sentence();

	return bio;
}

saveUser(){

	// for(let i = 0; i < 420; i++){
	const user = this.createUser();
	const bio  = this.createBio();
	const userQuery = `INSERT INTO User (email, password, username, avatar) 
	VALUES ("${user.email}","${user.password}","${user.username}", "${user.avatar}")`;

	sql.query(userQuery, (err, response) => {
		if(err) throw err;

		const bioQuery = `INSERT INTO Bio (user_id, phone, email, address, birth_date, gender, education, occupation, about, credo) 
		VALUES (${response.insertId}, "${bio.phone}","${bio.email}", "${bio.address}", "${bio.birth_date}", "${bio.gender}",
		"${bio.education}","${bio.occupation}", "${bio.about}", "${bio.credo}")`;

	sql.query(bioQuery, (err, result) => {
		if(err) throw err;
		console.log(`user number ${response.insertId} created!`);
		const friendQuery = `INSERT INTO Friends (inviting_id, receiver_id, accepted) VALUES (${response.insertId}, 42, true)`;

		sql.query(friendQuery, (err, res) => {
			if(err) throw err;
			console.log(`friendship with ${response.insertId} established!`);
			const postQuery = `INSERT INTO Post (content, user_id) VALUES ('${faker.lorem.sentences()}', ${response.insertId})`;

			sql.query(postQuery, (err, postRes)=>{
			if(err) throw err;
			console.log(`User:id ${response.insertId} post created with id: ${postRes.insertId}!`);

			const usersRandQuery = `SELECT id FROM User ORDER BY RAND() LIMIT 4;`
			sql.query(usersRandQuery, (err, randResponse)=>{
			if(err) throw err;

				const responsesQuery = `INSERT INTO Response (content, post_id, user_id) VALUES ('${faker.lorem.sentences()}', ${postRes.insertId}, ${randResponse[0].id})`;
				sql.query(responsesQuery, (err, doneResponse)=>{
				if(err) throw err;
				console.log(`response number ${response.insertId} done!`);
				});
			});

			});
		});
	});

	});
	// }
}

};

module.exports = new Faker();