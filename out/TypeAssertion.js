var doSomething = function () {
    console.log("do Something but do not return");
};
var foo = undefined;
var bar; //never use any
bar.nane(); //no error here in typescript because any is bad keyword
var t = function () {
    throw "never";
};
var vAny = 10;
var vUnkown = 10;
var s1 = vAny;
var s2 = vUnkown;
var pageNumber = "1";
var numericPageNumber = pageNumber; //TypeAssertion
