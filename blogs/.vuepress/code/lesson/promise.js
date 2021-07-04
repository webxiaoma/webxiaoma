const log = console.log;

const fun = function(){

}


const p = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve(1)
        resolve(2)
        reject(2)
     },1000)
}).then((data)=>{
  log("then:",data)
  return Promise.reject(3);
}).then((data)=>{
  log("then2:",data)
}).catch((err)=>{
  log("catch:",err)
}).then((data)=>{
  log("then3:",data)
})









/**


1. 等待 pedding
2. fullstate 成功 --> then
3. reject 失败 -- catch


created(){
  this.handleReq().then(res=>{
   
  })
},
method:{
   handleReq(){
     return new Promise((reslove,reject)=>{
         fecth({
             url:"/rw",
             data:{}
         }).then(res=>{
            reslove(res)
         }).catch(err=>{
             reject(err)
         })
     })
   }
    
}


*/

// Object

