var puzz = getURLParam("puzz"); 
if ( puzz == "" ){
	var Today = new Date();
	var ddd = Today.getDate();
	var mmm = Today.getMonth() + 1;
	var mmm = "" + mmm;
	var year = Today.getFullYear();
	if (mmm<10) {mmm="0"+mmm};
	if (ddd<10) {ddd="0"+ddd};
	puzz = "dq1-" + year + "-" + mmm + "-" + ddd;
}
else
{
	ddd = puzz.substr(12,2);
	mmm = puzz.substr(9,2);
	year = puzz.substr(4,4);
}
if (ddd<10) {ddd=puzz.substr(13,1);}
if (mmm<10) {mmm=puzz.substr(10,1);}
 switch (mmm) {
    case "1":
      month = "January";
      break;
    case "2":
      month = "February";
      break;
    case "3":
      month = "March";
      break;
    case "4":
      month = "April";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "June";
      break;
    case "7":
      month = "July";
      break;
    case "8":
      month = "August";
      break;
    case "9":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  } 
document.write ("<h2>" + month + " " + ddd + ", " + year + "</h2>"); 
if (mmm<10) {mmm="0"+mmm};
if (ddd<10) {ddd="0"+ddd};
puzzdir = year + "-" + mmm + "/";
puzzdir2 = year + "-" + mmm + "a/";
puzz = "dq1-" + year + "-" + mmm + "-" + ddd;

var fill = getURLParam("fill"); 
if ( fill == "" ){
	var puzzfill = puzz + "fill";
	var fill= readCookie(puzzfill);
		if (fill) {
			document.write ('<strong> (puzzle restored from previously saved version)</strong>');
		}
}
else {
  puzzfill = puzz + "fill";
  createCookie(puzzfill,fill,5);
  document.write ('<strong> (saved)</strong>');
}
