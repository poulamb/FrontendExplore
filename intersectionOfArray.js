
/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
    // your code here
    let f=0,s=0
    let ret=[]
    while(f<arr1.length && s<arr2.length){
      if(arr1[f] == arr2[s]){
        ret.push(arr1[f])
        f++
        s++
      }else if(arr1[f]<arr2[s])
        f++
      else s++  
    }
    return ret
  }