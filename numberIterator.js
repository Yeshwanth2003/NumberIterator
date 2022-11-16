Number.prototype[Symbol.iterator] = function(){
   let val = this.valueOf()
   return {
       next:function(){
           let valRet = val%10;
           let returnState; 
           if(val >0){
               returnState = {value:valRet,done:false}
           }
           else{
               returnState = {value:99,done:true}
           }
           val = parseInt(val/10);
           return returnState;
       }
   }
}
