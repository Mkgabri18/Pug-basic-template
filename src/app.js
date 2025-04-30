import './styles/style.scss';

console.log("Hello World, time to init")
/*let template = require("./templates/components/users.pug");

*/
let locals = {
    users: [
        "user1",
        "user2",
        "user3",
        "user4",
        "user5"
    ]
};
document.querySelector("main").appendChild = locals;
