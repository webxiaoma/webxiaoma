const industry_list = [
    {
      "parent_ind" : "女装",
      "name" : "连衣裙"
    },
    {
     "name": "女装"
    },
    {
      "parent_ind" : "女装",
      "name" : "半身裙"
    },
    {
      "parent_ind" : "女装",
      "name" : "A字裙"
    },
    {
       "name": "数码"
    },
    {
      "parent_ind" : "数码",
      "name": "电脑配件"
    },
    {
      "parent_ind" : "电脑配件",
      "name": "内存"
    },
]



let newArr = []
function convert_format(data){
  for(var i =0;i<data.length;i++){
    if(!data[i].parent_ind){
      newArr.push({
        "data[i].parent_ind":{}
      })
      delete data[i]
    }

  }
}
console.log(newArr,industry_list)



//   let a ={
//     "数码": {
//       "电脑配件": {
//           "内存" : {}
//       }
//     },
//     "女装" : {
//       "连衣裙": {},
//       "半身裙": {},
//       "A字裙": {}
//     }
// }