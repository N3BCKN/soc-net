
exports.dataMissing = () => { return {errors: [{title: 'Data missing!', detail: 'Provide data correctly!'}]}};

exports.invalidPswd = () => { return {errors: [{title: 'Invalid passsword!', detail: 'Password is not a same as confirmation!'}]}};

exports.serverErr   = () => { return {errors: [{title: 'Database error', detail: 'data cannot be saved!'}]}};

exports.existance = (column) => { return {errors: [{title: 'Invalid Data!', detail: `${column} already exists!`}]} }

exports.notFound  = (column) => {return {errors: [{title: 'Invalid Data!', detail: `${column} not found!`}]}}

exports.unauthorized = () => { return {errors: [{title: 'Unauthorized Attempt', detail: 'You need to loggin to get access'}]} }

exports.unauthorizedUser =() => { return {errors: [{title: 'Unauthorized Login', detail: 'Wrong email or password.'}]} }

