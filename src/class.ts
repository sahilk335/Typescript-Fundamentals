interface testInterface {
    getFullName(): string;
}


class Test implements testInterface {

    protected firstName: string;
    private lastName: string;

    readonly unchangableName: string;

    static readonly maxAge = 50;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }


    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }


    setUnchangeableName(): void {
        //not possible
        //this.unchangableName="foo"

    }

}

class TestAdmin extends Test {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }


}

const test = new Test("Sahil", "khurana");
console.log(test.getFullName);
console.log(Test.maxAge);


const testAdmin = new TestAdmin("Test", "Admin");
testAdmin.setEditor("editor");
console.log(testAdmin.getEditor);

