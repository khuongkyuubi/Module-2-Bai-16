"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailRegex_1 = require("./EmailRegex");
var emailRegex = new EmailRegex_1.EmailRegex();
var validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
var invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var email = validEmail_1[_i];
    var isValid = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isValid);
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var email = invalidEmail_1[_a];
    var isValid = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isValid);
}
