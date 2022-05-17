const phoneNumber = [
    "097-123-1234",
    "091-303-0001",
    "0123-123-324"
];

function sanitize(phoneNumber) {
    return phoneNumber.map(str => {
        return str.replace(/[.-]/g, "")
    })
}

console.log(sanitize(phoneNumber))

const phoneNumberRegex = /^0[0-9]{9}$/g;
const phoneNumberRegex2 =new RegExp("^0[0-9]{9}$", "g");

console.log(phoneNumberRegex instanceof RegExp);
console.log(phoneNumberRegex2.test("01234456789"));

console.log("070-1234-1234".match(/-\d+/));

console.log((/[CAP]\d{4}[GHIKLM]/gm).test("C0318G, M0318G, P0323A"));
console.log(("C0318G, M0318G, P0323A").match(/[CAP]\d{4}[GHIKLM]/gm));