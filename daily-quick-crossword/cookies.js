function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return "";
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}
function switchCookie(name) {
	var cstate = readCookie(name);
	if (cstate == 1) {
		createCookie(name,0,1);
	}
	else {
		createCookie(name,1,1);
	}
}
function getURLParam(strParamName){
var strReturn = "";
var strHref = window.location.href;
if ( strHref.indexOf("?") > -1 ){
var strQueryString = strHref.substr(strHref.indexOf("?"));
var aQueryString = strQueryString.split("&");
for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
if (
aQueryString[iParam].indexOf(strParamName + "=") > -1 ){
var aParam = aQueryString[iParam].split("=");
strReturn = aParam[1];
break;
}
}
}
return strReturn;
}
