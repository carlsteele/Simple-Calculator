
function updateRate() 
{
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
    // console.log(rateval)
    // console.log(principal)
   
}

function compute()
{

    let principal = document.getElementById("principal").value;
    
    if (principal <= 0 || principal == NaN) 
      {
        alert('Enter a positive number')
      }
      else 
      {
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);
    let rateval = document.getElementById("rate").value;
    document.getElementById("result").innerHTML=`If you deposit <mark>${principal}$</mark>,
    at an interest rate of <mark>${rateval}%</mark>.
    You will receive an amount of<mark>${interest}</mark>,
    in the year <mark>${year}</mark>.`
      }
     
  }