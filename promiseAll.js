
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    return new Promise((resolve, reject)=>{
        if(promises.length==0)
          resolve([])
        let res=[]
        let c = 0
        promises.forEach((p,i)=>{
          Promise.resolve(p).then((v)=>{
            res[i]=v;
            c++
            if(c== promises.length)
              resolve(res)
          }).catch((e)=>reject(e))
        })
        
    })
  }