
Function.prototype.call = function(){
   let thisObj = arguments[0];


   thisObj.fun = this;

   let argsAry  = [];
   for(let i = 1,len=arguments.length;i<len;i++){
      argsAry.push(arguments[i])
   }
   console.log(`thisObj.fun(${argsAry.join(",")})`)
   eval(`thisObj.fun(${argsAry.join(",")})`);
}


var foo = {
  value: 1
};

function bar(a,b) {
  console.log(a,b)
  console.log(this.value);
}

bar.call(foo,1,2,3,4); // 1