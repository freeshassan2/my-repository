
function myalldaywork (){
      setTimeout(() => {
          console.log("wakeup early in the morning")
          setTimeout(() =>{
              console.log("ready breakfast")
              setTimeout(() => {
                  console.log("ready for university")
                  setTimeout(() => {
                      console.log("reach university class")
                      setTimeout(() => {
                          console.log("break in university")
                          setTimeout(() => {
                              console.log("leave university")
                              setTimeout(() => {
                                  console.log("dinner time")
                                  setTimeout(() => {
                                      console.log("reach bus kahuta")
                                      setTimeout(() => {
                                          console.log("reach home")
                                      }, 10000);
                                  }, 9000);
                              }, 8000);
                          }, 7000);
                      }, 6000);
                  }, 5000);
              }, 4000);
          }, 3000)
      }, 2000);
  }
  myalldaywork();
  
  const promise = new Promise((resolve, reject) => {
      // Perform the asynchronous operation here.
      if ('success') {
        resolve('Success!');
      } else {
        reject('Error!');
      }
    });
    
    // Handle the completion of the promise.
    promise.then((value) => {
      console.log(value); // 'Success!'
    }).catch((error) => {
      console.log(error); // 'Error!'
    });
  
    const firstpromise = new Promise((resolve, reject)=>{
      setTimeout(function(){
        if ('Done') {
          resolve('Done');
        } else {
          reject('error');
        }
      },1000)
    });
  promise.then((value)=>{
      console.log(value);
    })
    .catch((error)=>{
      console.log(error);
    });
  
  const secondpromise = new Promise(function(resolve, reject)  {
      setTimeout(() => {
        console.log('you car is crashed');
        if ('done') {
          resolve('done');
        } else {
          reject('error');
        }
      }, 1000);
    });
    
    secondpromise.then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
  
  
  const farees = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Farees',
          age: 18,
          occupation: 'Student',
        });
      }, 1000);
    });
    
    farees.then((farees) => {
      console.log(farees);
    })
    .catch((error) => {
      console.log(error);
    });
    {
      name: 'Farees';
      age: 18;
      occupation: 'Student';
    }
    
  function carMaintenance(){
      console.log("I leave my car at 9 in workshop");
  
  setTimeout(() => {
      console.log("Car is fixed...");
      return "Your car is ready"
  }, 2000);
  }
  
  function pickDress(){
      setTimeout(() => {
          return "Your Dress is ready"
      }, 100);
  }
  
  function carMaintenance2 (num: number){
  let promiseObj : Promise<string> = new Promise (function(resolve, reject){
      setTimeout(function() {
          console.log("your car engine was destroyed due to over heating");
          resolve("you must to pay to renew your car engine")
      }, 2000);
  });
  return carMaintenance;
  }
  function someTask(num: number){
      let promiseObj :Promise<string> = new Promise((resolve,reject)=>{
  
          if(num >3 ){
          resolve("Promises are resolved here...");
          }
          else{
              reject("Promises are rejected here...")
          }
      });
  
      return promiseObj;
  }
  
  const promiseOne = new Promise(function(resolve, reject){
      setTimeout(function(){
          console.log('task one is completed..');
          resolve('task one is completed..')
      }, 1000)
  })
  
  promiseOne.then(function(){
          console.log("task 2 is completed...")
  })
  
  new Promise(function(resolve, reject){
      setTimeout(function(){
  console.log("aysnc task 2");
  resolve("aysnc task 2")
      }, 2000)
  }).then(function(){
  console.log("async 2 denied");
  })
  
  const promisethree = new Promise(function(resolve){
      setTimeout(function(){
          resolve({username: "farees hassan butt", email: "freeshassanbutt2004@gmail.com"})
      },2000)
  })
  
  promisethree.then(function(user){
      console.log(user);
  })
  
  const promisefour = new Promise(function(resolve, reject){
      setTimeout(function(){
          let error = true
          if (!error) {
              resolve({username: "farees", passowrd: "123"})
          } else {
              reject('error: something gone want wronge with frees')
          }
      }, 1000)
  })
  
  promisefour.then((user:any) => {
      console.log(user);
      return user.username
  }).then ((username)=>{
      console.log(username)
  }).catch(function(error){
      console.log(error);
  })
  
