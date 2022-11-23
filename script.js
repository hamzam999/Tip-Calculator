window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip()
{
    var bill = document.querySelector("#billamt").value;
    var tipPercentage = document.querySelector("#serviceQual").value;
    var persons = document.querySelector("#peopleamt").value;
    if (bill === '') {
      alert('Please Enter Bill Amount')
      return
    }
    if (persons === '0' || persons === '') {
      alert('Please Enter Number of people')
      return
    }
    if (tipPercentage === 'Select') {
      alert('please select tip percentage')
      return
    }
    if (persons === '1' || persons === '0') {
      document.querySelector('#each').style.display = 'none'
    } else {
      document.querySelector('#each').style.display = 'block'
    }

    var tip = (bill * tipPercentage) / persons
    tip = tip.toFixed(2)
    if (tip < 1) {
      tip = 0
    }
    if (persons < 1) {
      tip = 0
    }
    console.log(tip);
    document.getElementById("total").innerHTML=tip;
}