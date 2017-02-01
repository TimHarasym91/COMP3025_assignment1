
//Initialise variables
currentNum = "0";
memory  = "0";
calcOperation = 0;
maxLength = 20;

// Add number to display and set the current value
function addNum(num)
{
  if(currentNum.indexOf("!") == -1)
  {
    if((eval(currentNum) == 0) && (currentNum.indexOf(".") == -1))
    {
      currentNum = num;
    }
    else
    {
      currentNum = currentNum + num;
    }
    currentNum = currentNum.toLowerCase();
  }
  else
  {
    currentNum = "Press 'AC'";
  }

  if(currentNum.indexOf("e0") != -1)
  {
    var epos = currentNum.indexOf("e");
    currentNum = currentNum.substring(0,epos+1) + currentNum.substring(epos+2);
  }

  if(currentNum.length > maxLength)
  {
    currentNum = "Error: Value too long.";
  }
  document.getElementById("results").textContent = currentNum;
}

//Determines operation type and displays it and then runs the calculation function
function Operate(op)
{
  if(calcOperation != 0)
  {
   Calculate();
  }

  if(op.indexOf("+") > -1)
  {
   calcOperation = "add";
   operationType =  "+";
  }
  if(op.indexOf("-") > -1)
  {
   calcOperation = "subtract";
   operationType =  "-";
  }
  if(op.indexOf("*") > -1)
  {
   calcOperation = "multiply";
   operationType = "x";
  }
  if(op.indexOf("/") > -1)
  {
   calcOperation = "divide";
   operationType =  "÷";
  }

  memory = currentNum;
  currentNum = "";
  if(operationType != "")
  {
   document.getElementById("results").textContent = operationType;
  }
  else
  {
   document.getElementById("results").textContent = currentNum;
  }
}

//Calculation function for all calculation types
function Calculate()
{
  if(calcOperation == "add")
  {
   currentNum = eval(memory) + eval(currentNum);
  }
  if(calcOperation == "subtract")
  {
   currentNum = eval(memory) - eval(currentNum);
  }
  if(calcOperation == "multiply")
  {
   currentNum = eval(memory) * eval(currentNum);
  }
  if(calcOperation == "divide")
  {
   if(eval(currentNum) != 0)
   {
     currentNum = eval(memory) / eval(currentNum)
   }
   else
   {
     currentNum = "Can not divide by zero.";
   }
  }

  calcOperation = 0;
  memory = "0";
  currentNum = currentNum + "";

  //Special Cases
  if(currentNum.indexOf("Infinity") != -1)
  {
   currentNum = "Error: Infinite Num.";
  }
  if(currentNum.indexOf("NaN") != -1)
  {
   currentNum = "Error: NaN";
  }
  document.getElementById("results").textContent = currentNum;
}

//Clears the current number
function Clear()
{
  currentNum = "0";
  document.getElementById("results").textContent = currentNum;
}

//Clears all memory
function AllClear()
{
  currentNum = "0";
  calcOperation = 0;
  memory = "0";
  document.getElementById("results").textContent = currentNum;
}

//Handles adding a decimal
function addDecimal()
{
  if(currentNum.length == 0)
  {
    currentNum = "0.";
  }
  else
  {
    if((currentNum.indexOf(".") == -1) && (currentNum.indexOf("e") == -1))
    {
      currentNum = currentNum + ".";
    }
  }
  document.getElementById("results").textContent = currentNum;
}

//Function for changing value to and from +/-
function plusMinus()
{
  if(currentNum.indexOf("e") != -1)
  {
    var epos = currentNum.indexOf("e-");
    if(epos != -1)
    {
      currentNum = currentNum.substring(0,1+epos) + currentNum.substring(2+epos);
    }
    else
    {
      epos = currentNum.indexOf("e");
      currentNum = currentNum.substring(0,1+epos) + "-" + currentNum.substring(1+epos);
    }
  }
  else
  {
    if(currentNum.indexOf("-") == 0)
    {
      currentNum = currentNum.substring(1);
    }
    else
    {
      currentNum = "-" + currentNum;
    }
    if((eval(currentNum) == 0) && (currentNum.indexOf(".") == -1))
    {
      currentNum = "0";
    }
  }
  document.getElementById("results").textContent = currentNum;
 }
