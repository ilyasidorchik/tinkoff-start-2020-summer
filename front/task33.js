function User() {}
User.prototype = { admin: false };

const user = new User();

User.prototype = { admin: true };

console.log(user.admin); // false

/*
 * because when user create, admin equals false
 */
