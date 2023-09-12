//problem for PROMISES -- CALLBACK FN IN JS


//come home
//open gate and close gate
//make food and eat food
//sleep

let ans = new Promise(function (res, rej) {
    return res("First, come home.")
}) //promise no.1

let p2 = ans.then(function (data) {
    console.log(data);
    //first asynchronous task i.e. Promise 1 is completed and second one i.e. Promise 2 starts here
    return new Promise(function (res, rej) {  //answer of Promise 2 is stored and returned in p2
        return res("open gate and close gate.")
    })
})

let p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("make food and eat food. ")
    })
})

let p4 = p3.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("sleep.")
    })
})