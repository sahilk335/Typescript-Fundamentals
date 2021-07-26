const addId = <T extends Object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
}

interface UserInterfaces<T, V> {
    name: string;
    data: T;
    meta: V;
}

const user4: UserInterfaces<{ meta: string }, string> = {
    name: "Sahil",
    data: {
        meta: "foo"
    },
    meta: "bar",
};

const user5: UserInterfaces<string[], string> = {
    name: "fooo",
    data: ["baz", "jaz"],
    meta: "bar",
};