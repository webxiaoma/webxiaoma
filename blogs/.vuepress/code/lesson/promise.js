var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];



function fittle(ary){

  let set = new Set(ary.flat(Infinity));

  return [...set].sort(function(a,b){
    return a-b;
  })
}



console.log(arr.toString().split(",").sort(function(a,b){
    return a-b;
  })
)



console.log(fittle(arr))