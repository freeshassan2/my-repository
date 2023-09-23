// const promise = new Promise((resolve, reject) => {
//     // Perform the asynchronous operation here.
//     if ('success') {
//       resolve('Success!');
//     } else {
//       reject('Error!');
//     }
//   });
//   // Handle the completion of the promise.
//   promise.then((value) => {
//     console.log(value); // 'Success!'
//   }).catch((error) => {
//     console.log(error); // 'Error!'
//   });
//   const firstpromise = new promise((resolve, reject)=>{
//     setTimeout(function(){
//       if ('Done') {
//         resolve('Done');
//       } else {
//         reject('error');
//       }
//     },1000)
//   });
// promise.then((value){
//     console.log(value);
//   });
//   .catch((error){
//     console.log(error);
//   });
// const secondpromise = new Promise(function(resolve, reject) => {
//     setTimeout(function() => {
//       console.log('you car is crashed');
//       if ('done') {
//         resolve('done');
//       } else {
//         reject('error');
//       }
//     }, 1000);
//   });
//   secondpromise.then((value) => {
//     console.log(value);
//   });
//   .catch((error) => {
//     console.log(error);
//   });
// const farees = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: 'Farees',
//         age: 18,
//         occupation: 'Student',
//       });
//     }, 1000);
//   });
//   farees.then((farees) => {
//     console.log(farees);
//   });
//   .catch((error) => {
//     console.log(error);
//   });
//   {
//     name: 'Farees',
//     age: 18,
//     occupation: 'Student',
//   }
// function carMaintenance(){
//     console.log("I leave my car at 9 in workshop");
// setTimeout(() => {
//     console.log("Car is fixed...");
//     return "Your car is ready"
// }, 2000);
// }
// function pickDress(){
//     setTimeout(() => {
//         return "Your Dress is ready"
//     }, 100);
// }
// function carMaintenance (num: number){
// let promiseObj : Promise<sring> = new Promise (function(resolve, reject){
//     setTimeout(function() => {
//         console.log("your car engine was destroyed due to over heating");
//         resolve("you must to pay to renew your car engine")
//     }, 2000);
// });
// return carMaintenance;
// }
// function someTask(num: number){
//     let promiseObj :Promise<string> = new Promise((resolve,reject)=>{
//         if(num >3 ){
//         resolve("Promises are resolved here...");
//         }
//         else{
//             reject("Promises are rejected here...")
//         }
//     });
//     return promiseObj;
// }
var promiseOne;
+new promiseOne(function (resolve, reject) {
    setTimeout(function () {
        console.log('task one is completed..');
        resolve();
    }, 1000);
});
promiseOne.then(function () {
    console.log("task 2 is completed...");
});
