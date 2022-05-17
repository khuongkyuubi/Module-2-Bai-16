let phoneRexExp = /\(\d{2}\)-\(0\d{9}\)/gm
phoneRexExp.test("(84)-(0978489648)") // true
phoneRexExp.test("(a8)-(22222222)") // false
