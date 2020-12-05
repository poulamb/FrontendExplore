
/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
    let allow = true;
    let lastArgs = null;
    
    return function t(...args){
    
      if(allow){
        func.apply(this,args)
        allow=false;
        setTimeout(()=>{
          allow=true
        if(lastArgs){
          let y = 
        func.apply(this,lastArgs)
        lastArgs = null
        }
        },wait)
      }
      else{
      lastArgs = args
       }
    
    }
  }

  let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }

  const throttled = throttle(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}
console.log(run(['A@0', 'B@2', 'C@3']))
// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])