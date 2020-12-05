
/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    let row=0,col=0,dir=1;
    let msg="";
    if(message==null || message==undefined || message.length==0 )
      return msg;
    let size=message[0].length
    while(col<size){
    msg+=message[row][col]
      if(row==message.length-1){
        dir=0;
      }
      if(row==0){
        dir=1;
      }
      if(dir==1){
      row++;
      col++;
      }else{
      row--;
      col++;
      }
    
    }
    return msg;
    
  }