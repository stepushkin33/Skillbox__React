//ex 1
function Concatenations(a, b) {
    return a.concat(b);
}
console.log(Concatenations('Hello, ', 'World!'));
var MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
};
var initialValue = 0;
var array = [1, 2, 3];
console.log(array.reduce(function (acc, cur) { return acc + cur; }));
