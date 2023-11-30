
let myPromise = new Promise((resolve, reject) => {
    let numb1 = prompt();
    let numb2 = prompt();
    if (numb1 + 0)
        resolve(eval(`${numb1} + ${numb2}`))
    reject (`${numb1} and ${numb2} is not a number`)

})
myPromise.then(
    (correct) => {
        console.log(correct);
    },
    (denied) => {
        console.log(denied)
    }
)
    .catch(rejected =>
    {
        console.log(rejected);
})
