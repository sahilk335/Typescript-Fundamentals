var user = {
    name: "Monster",
    age: 29,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Sahil",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user2.name);
