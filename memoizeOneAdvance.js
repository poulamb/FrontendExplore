
/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function memoizeOne(func, isEqual=(a,b)=>{
    if(!a || !b || a.length!==b.length)
     return false
    return a.every((item,i)=>item===b[i])
   }) {
     // your code here
     let lastArg=[],lastVal,lastThis;
     return function memoized(...args){
       if(isEqual.call(this,lastArg,args) && lastThis==this)
         return lastVal
       lastArg=[...args]
       lastVal=func.apply(this,args)
       lastThis=this
       return lastVal  
     }
   }
   /**
    * In problem 14. Implement a general memoization function, you are asked to implement a memo function without space concern.

But in reality, it could be a problem if cache bloats.

You might need to restrict the cache capacity, just like memoize-one , it only remembers the latest arguments and result.

Please implement your own memoizeOne(), it takes 2 arguments

target function
(optional) a equality check function to compare current and last arguments
Default equality check function should be a shallow comparison on array items with strict equal ===.
    */

   let callCount = 0
   const func = (a, b, c) => {
     callCount += 1
     return a + b + c
   }
   const memoed = memoizeOne(func, 
        (args1, args2) => Math.max(...args1) === Math.max(...args2)
                       )
   
   expect(memoed(1,2,3)).toBe(6)
   expect(callCount).toBe(1)
   expect(memoed(1,1,3)).toBe(6)
   expect(callCount).toBe(1)
   expect(memoed(2,2,3)).toBe(6)
   expect(callCount).toBe(1)
   expect(memoed(2,2,2)).toBe(6)
   expect(callCount).toBe(2)

   let callCount = 0
const func = (a, b) => {
  callCount += 1
  return a + b
}
const memoed = memoizeOne(func, () => false)

expect(memoed(1,2)).toBe(3)
expect(callCount).toBe(1)
expect(memoed(1,2)).toBe(3)
expect(callCount).toBe(2)
expect(memoed(1,3)).toBe(4)
expect(callCount).toBe(3)
expect(memoed(10,30)).toBe(40)
expect(callCount).toBe(4)