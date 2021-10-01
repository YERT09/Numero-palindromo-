document.getElementById("boton").addEventListener("click",clik);

function clik()
{
  var entrada = document.getElementById("numero").value;
  var salidas=true;
  var reciduo=[];
  var cociente=0;
  var bool=false;
 
  document.getElementById("base").innerHTML="Base: 0";

  for(var i=2; i<entrada; i++)
  {
    cociente=entrada;
    while( (cociente%i==1||cociente%i==0) && cociente>0)
    {
      reciduo.push(cociente%i);
      cociente= Math.trunc(cociente/i);
      if(cociente<=i)
        bool=true;
    }
    if(bool==true && reciduo.length>=2)
    {
      for(var j=0;j<=(reciduo.length/2);j++)
      {
        if(reciduo[j]!=reciduo[(reciduo.length-1)-j])
        {
          salidas=false;
        }
      }
      if(salidas==true)
      {
        document.getElementById("base").innerHTML="Base: "+i.toString();
        break;
      }
    }
    bool=false;
    salidas=true;
    reciduo=[];
  }
}