
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
    const {leading, trailing} = option
    let timer,lastArgs;
      return function debounced(...args){
        if(leading && timer==null){
          func.apply(this,args)
        }
        else if(trailing){
          lastArgs=args
        }
        if(timer){
          clearTimeout(timer)
        }
          timer = setTimeout(()=>{
            if(lastArgs){
            func.apply(this,lastArgs)
            lastArgs=null
            }
            timer=null
          },wait)
      }
      // your code here
  }
    
  let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }

  const debounced = debounce(func, 3,{leading: false, trailing: true})
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@6'])                                                                                                                                                            