function User() {}
User.prototype = { admin: false };

const user = new User();

User.prototype.admin = true;

console.log(user.admin); // true
