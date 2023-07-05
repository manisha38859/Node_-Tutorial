const amount=2

if(amount<10){
    console.log('small number')
}
else{
    console.log(`large number`)
}
console.log(`hey it's my first node a`)




                    ////GLOBALS  -  NO WINDOW!!!!
                    //// __dirname  -  path to current directory
                    //// __filename  -  file name
                    //// require  -  function to use  modules (common js)
                    //// module  -  info about current module(file)
                    //// process  -  info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(process);
console.log(module);
console.log(require);

                    ////access to console->
                    ////1.> setInterval
                    ////2.>setTimeout

setInterval(()=>{
    console.log("Hello World")
},1000)

                    //// Every file is module by default  
                    //// MODULES - Encapsulated Code
 const john = "John" 
 const peter = "Peter"


const name = require('./3-firstmodule')
const sayHi = require('./4-secondmodule_or_utils')
const data = require('./5-alternative-flavour') // in place od data anything can be written
console.log(data) 
require('./6-mind-grenade')  //No need to assign as the funtion is invoked in mind-grenade
console.log(name)

 const sayHi=(name)=>{
    console.log(`Hello there ${name}`);
 }

 sayHi('Manisha')
 sayHi(name.john)
 sayHi(name.peter)
 
