function race(promises) {
    let res = []
    let c=0
    return new Promise((resolve,reject)=>{
      
      if(promises.length==0)
        return resolve([])
      promises.forEach((p)=>{
      Promise.resolve(p).then((v)=>{
      resolve(v)
      })
        .catch((e)=>{
         reject(e)
      })
      })
      
    })
    
  }