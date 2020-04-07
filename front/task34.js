const a = {};
const b = {};

console.log(a.__proto__ === b.__proto__); // true

/*
 * because a.__proto__ equals new Object() and so b.__proto__ equals
 */
