interface User {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: User = {
    name: "Monster",
    age: 29,
    getMessage() {
        return "Hello" + name;
    }
};

const user2: User = {
    name: "Sahil",
    getMessage() {
        return "Hello" + name;
    }
}

console.log(user2.name);
