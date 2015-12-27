'use strict';

angular.module('coursesApp')
.directive('dateDir', function (){
      return {
        restrict : 'E',
        link : function dateDir(scope, elem, attrs){
            var i=0; 
            function nowdate(obj,evt)  
            {  
                if(i!=(obj.value.length-1))i=obj.value.length-1; 

                if(evt.keyCode>='48'&& evt.keyCode <='57'||evt.keyCode>='97' && evt.keyCode <= '105'){ 
                    if(i<10){ 
                        if(i==2||i==5){ 
                        obj.value=obj.value.substring(0,obj.value.length-1)+'.'; 
                        } 
                    i+=1; 
                    }else{obj.value=obj.value.substring(0,obj.value.length-1);} 
                }else{ 
                obj.value=obj.value.substring(0,obj.value.length-1); 
                } 
            };
        }
    }

    }
})
  





 

<input name="myinput" onkeyup="nowdate(this,event);" value="ДД.ММ.ГГГГ" onfocus="this.value='';" /> 
