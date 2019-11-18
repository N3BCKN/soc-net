class AvatarHelper{
	constructor(){
		this.colors = ['0000ff', '00FF00','cccc00','730073', 'b2d8b2','e5e5e5', '521515'];
	}

	getColors(){
		const randomNumber = Math.floor(Math.random()*this.colors.length)
		return this.colors[randomNumber];
	}

	prepareName(name){
		const userName = name.split(' ');
		if(userName.length == 0) return userName
		else{
			return `${userName[0]}+${userName[1]}`;
		}
	}

	getAvatar(name){
		const avatarName = this.prepareName(name);
		const colors     = this.getColors();

		return `https://eu.ui-avatars.com/api/?name=${avatarName}&size=400&background=${colors}`;
	};

};

module.exports = new AvatarHelper();