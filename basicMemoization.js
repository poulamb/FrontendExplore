/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver=(...a)=>
a.reduce((acc,curr)=>acc+'_'+curr,'')
) {
  let m = new Map();
  
  return function memoized(...args){
    let k,v;
    
    k=resolver.apply(this,args)
    if(m.has(k)){
      return m.get(k)
    }
    v=func.apply(this,args)
    m.set(k,v)
    return v
  }
  // your code here
}