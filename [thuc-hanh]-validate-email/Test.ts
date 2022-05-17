import {EmailRegex} from "./EmailRegex";

let emailRegex = new EmailRegex();
let validEmail: string[] = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for (let email of validEmail) {
    let isValid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isValid);
}

for (let email of invalidEmail) {
    let isValid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isValid);
}