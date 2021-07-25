const doSomething = (): void => {
    console.log("do Something but do not return");

}

const foo: void = undefined;

let bar: any; //never use any
bar.nane() //no error here in typescript because any is bad keyword


const t = (): never => {
    throw "never";

};

let vAny: any = 10;
let vUnkown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnkown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number; //TypeAssertion
