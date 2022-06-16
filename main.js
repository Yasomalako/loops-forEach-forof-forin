//1
// function someFunc(objectArray) {
//     objectArray.forEach((item) => {
//         if (item.age > 18) {
//             console.log(item.name)
//             return;
//         }
//         else {
//             console.log(item.lastName)
//         }
//     })
// }
// someFunc(objectArray = [obj1 = { name: "yaso", age: '28', lastName: "malako" },
// object2 = { name: "lior", age: '18', lastName: "dawit" }])
//2
let chenge = document.getElementsByClassName("catch")
function chengeColor(){
for(const item of chenge){
    console.log(item);
    item.style.color = "red"
    item.innerText = "Yaso The king" 
}
}


