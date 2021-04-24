console.log("Hello World")
let template = require("./templates/components/users.pug");

let locals = {
    users: [
        "user1",
        "user2",
        "user3",
        "user4",
        "user5"
    ]
};

document.querySelector("main").innetHTML = template(locals);
