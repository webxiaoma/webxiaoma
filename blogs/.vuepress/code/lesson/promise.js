


function Foo(){
	getName = function(){
		console.log(1);					
  };
	return this
}
			
function getName(){
	console.log(5);
}


Foo().getName();


gobalContext = {
  OV:{

  },
  scope:global.OV,
  this: global.OV
}

ECStack = [
  gobalContext
]

checkscopeContext = {
  OV:{
    arguments:{
      length:0
    }
  },
  scope:[checkscope.OV,global.OV],
  this: undefined,
}


ECStack = [
  checkscopeContext,
  gobalContext
]

ECStack = [
  gobalContext
]


fContext = {
  OV:{
    arguments:{
      length:0
    }
  },
  scope:[fContext.OV,checkscope.OV,global.OV],
  this: undefined,
}

ECStack = [
  fContext,
  gobalContext
]

ECStack = [
  gobalContext
]


ECStack = [
]
