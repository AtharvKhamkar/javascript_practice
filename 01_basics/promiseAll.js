
const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("p1 success")
        //reject(new Error("p1 failure"))
    },3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("P2 success")
        //reject(new Error("P2 failure"))
    },5000)
})

const p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //resolve("p3 success")
        reject(new Error("p3 failure"))
    },2000)
})

Promise.all([p1, p2, p3]).then(function (data) {
    console.log(data)
}).catch(function (data) {
    console.log(data)
})