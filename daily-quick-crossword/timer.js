var timerID;
var pause=1;
var seconds=0;
var tenseconds=0;
var minutes=0;
var tenminutes=0;
var hours=0;
function cstop()
{
  clearTimeout(timerID);
  pause=1;
}
function cstart()
{
  if (pause==1)
  {
    pause=0;
    cdisplay();
  }
}
function creset()
{
  seconds=0;
  tenseconds=0;
  minutes=0;
  hours=0;
  document.forms["timer"].d2.value=hours+":"+tenminutes+minutes+":"+tenseconds+seconds;
}
function cdisplay()
{
  seconds+=1;
  if (seconds>=10)
  {
    seconds=0;
    tenseconds+=1;
  }
  if (tenseconds>=6)
  {
    tenseconds=0;
    minutes+=1;
  }
  if (minutes>=10)
  {
    minutes=0;
    tenminutes+=1;
  }
  if (tenminutes>=6)
  {
    tenminutes=0;
    hours+=1;
  }
  document.forms["timer"].d2.value=hours+":"+tenminutes+minutes+":"+tenseconds+seconds
  if (pause==0)
  {  
    timerID=window.setTimeout("cdisplay()",1000);
  }
}
