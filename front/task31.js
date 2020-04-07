function User() {}
User.prototype = { admin: false };

const user = new User();
console.log(user.admin); // false
