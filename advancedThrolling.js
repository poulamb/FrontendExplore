
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
    let allow = true;
    let lastArgs = null;
    const { leading, trailing } = option
    if (!trailing && !leading)
        return () => { }
    return function t(...args) {
        if (allow) {
            if (leading) {
                func.apply(this, args)
                allow = false;
            }
            setTimeout(() => {
                allow = true
                if (lastArgs) {
                    func.apply(this, lastArgs)
                    lastArgs = null
                }
            }, wait)
        }
        else {
            if (trailing)
                lastArgs = args
        }

    }
}

let currentTime = 0

const run = (input, option) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
      console.log(calls)
     calls.push(`${arg}@${currentTime}`)
  }

  const throttled = throttle(func, 3,option)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}

console.log(run(['A@0', 'B@1'], {leading: false, trailing: true}))
