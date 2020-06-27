console.log("Calculator App by Hamza");

// var input = document.getElementById("input")


function insert() {
  // var result = document.getElementById("result") 
  //   console.log(resut);
    
  //  result.value += num

   var myString = document.form.textview.value
   console.log(myString);
   var lastChar = myString[myString.length - 1]

    if(myString.length < 30) {
      if(!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
        document.form.textview.value = myString + num;
      }
      else if(num != lastChar) {
        document.form.textview.value = myString.replace(lastChar, num)
      }
    }
  }  

  function equal() {
    var sum = document.form.textview.value

     if(sum) {
       document.form.textview.value = eval(sum)
     }
  }

function clearResult() {
  document.form.textview.value = ""
}  

// function getResult() {
//   var result = document.getElementById("result")

//    result.value = eval(result.value)


//  }

function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1)
}