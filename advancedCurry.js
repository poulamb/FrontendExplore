
/**
 * @param { Function } func
 */
function curry(func) {
    // write your implementation here 
    
    return function curry2(...args){
        console.log(args.slice(func.length-1).includes(curry.placeholder))
        console.log(args.slice(func.length))
    if(args.length>=func.length && !args.slice(0,func.length-1).includes(curry.placeholder)){
      return func.apply(this,args)
    }
      else return function(...args2){
      args.forEach((x,idx)=>{
        if(x == curry.placeholder && args2.length>0){
            let y = args2.shift()
          args[idx]=y
          }
          })
         return curry2.apply(this,args.concat(args2))
      }
    
    }
  }
  
  curry.placeholder = Symbol()

  const  join = (a, b, c) => {
      let ret = `${a}_${b}_${c}`
      console.log(ret)
    return ret
 }
 
 const curriedJoin = curry(join)
 const _ = curry.placeholder
 
//  curriedJoin(1, 2, 3) // '1_2_3'
 
//  curriedJoin(_, 2)(1, 3) // '1_2_3'
 
//  curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

//  curriedJoin(_,_,3,4)(1,_)(2,5)
 curriedJoin(_,_,_,_)(_,2,_)(_,3)(1)