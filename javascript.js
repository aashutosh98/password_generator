function generate()
{
  var result=""
  var c;
  var uppercase=document.getElementById("uppercase").checked;
  var lowercase=document.getElementById("lowercase").checked;
  var number=document.getElementById("number").checked;
  var symbol=document.getElementById("symbol").checked;
  var length=document.getElementById("lengthbox").value;
  var result="";

   for(var i=0;i<length;i++)
     {
       c=Math.round(33+(Math.random()*93));
       if(symbol==false)
         {
           if ((c>=33&&c<=47)||(c>=58&&c<=64)||(c>=91&&c<=96)||(c>=123&&c<=126))
             {
              i--;
             continue;
             }
         }
       if(number==false){
           if(c>=48 && c<=57)
             {
               i--;
               continue;
             }
         
          }
       if(uppercase==false)
         {
           if(c>=65&&c<=90)
             {
              i--;
             continue;
             }
         }
       if (lowercase==false)
         {
           if(c>=97&&c<=122)
             {
             i--;
             continue;
             }
         }
        result+= String.fromCharCode(c);
       }
    
        document.getElementById("result").value=result;
 
       
     }

function copy()
{
  var copyText=document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0,9999);
  document.execCommand("copy");
  alert("The password has been copied to the clipboard");
  
}



    
