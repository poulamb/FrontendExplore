// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @returns {number[]}
 */
let tr= new Map()
let min=0,max=0
function traverse(root) {
 min=0,max=0
 tr= new Map()
 // your code here
  trav(root,0)
 let res=[]
 console.log("map..",[...tr],"min ",min, "max ", max)
 
 for(let i=min;i<=max;i++){
   res =[...res,...tr.get(i)]
 }
 return res
}
function trav(node, l){
   if(!node)
   return;
 //console.log("...",l,"..",node.value)
 if(!tr.has(l))
   tr.set(l,[node.value])
 else tr.get(l).push(node.value)
 min = Math.min(l,min)
 max = Math.max(l,max)
 trav(node.left, l-1)
 trav(node.right, l+1)   
}