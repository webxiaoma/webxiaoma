 new Promise((resolve, reject) => {

  setTimeout(()=>{
    resolve(11111)
   },1000)

 }).then(()=>{

  return new Promise((resolve, reject) => {
      
     setTimeout(()=>{
      resolve(21212)
     },1000)
  })
 }).then(res=>{
    console.log(res)
 })