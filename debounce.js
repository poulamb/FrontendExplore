
/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
    let timer;
    return function debounced(...args){
      if(timer){
        clearTimeout(timer)
        timer = null
      }
        timer = setTimeout(()=>{
          func.apply(this,args)
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

  const debounced = debounce(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@5'])