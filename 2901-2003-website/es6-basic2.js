// keyword let ==> block code
// keyword var ==> function code
// keyword const ==> block code
const orage = 12;
let apple = 15;
var banana = 10;
{
    var banana = 5;
    console.log(banana + 5); //10
}
console.log(banana + 10); //25
console.log(apple); //15