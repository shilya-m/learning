try{
  console.log( func1(5,2) )
  const func1 = (a,b)=> a-b
}catch(e){console.log(e)}

try{
  console.log( func1(5,2) )
  function func1(a,b) {
    return a-b
  }
}catch(e){console.log(e)}

try{
  var GeneratorFunction = Object.getPrototypeOf(function(){}).constructor
  var g = new GeneratorFunction('a', 'b', 'return a-b');
  console.log( g(10,2) );
}catch(e){console.log(e)}