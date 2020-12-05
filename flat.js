
/**
 * @param { Array } arr
 * @param { number } depth
 */
// function flat(arr, depth = 1) {
//     if(depth==0 || arr.constructor!=Array){
//       return arr
//     }else {
//       var res =[]
//       arr.forEach(x=>{
//         res = res.concat(flat(x,depth-1))
//       })
         
//       return res
//         }
//   }
function flat(arr, depth = 1) {
    return depth > 0
      ? arr.reduce(
          (acc, val) => [...acc, ...(Array.isArray(val) ? flat(val, depth - 1) : [val])],
          []
        )
      : arr;
  }
  const arr = [1, [2], [3, [4]]];

  console.log(flat(arr))
  // [1, 2, 3, [4]]
  
  console.log(flat(arr, 1))
  // [1, 2, 3, [4]]
  
  console.log(flat(arr, 2))
  // [1, 2, 3, 4]  