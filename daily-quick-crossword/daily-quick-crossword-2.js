document.write ("<applet class='CCJava' code='Grid_int.class' archive='ccjava.jar' name='CCXWORD' width=545 height=391>");
document.write ("<param name='DATAFILE' value='/daily-quick-crossword/puzzles/" + puzzdir + puzz  + ".jpz'>");
document.write ("<param name='SAVE' value='/daily-quick-crossword/daily-quick-crossword.html?puzz=" + puzz + "&fill=%PROGRESS%'>");
if (fill) document.write ("<param name='PROGRESS' value='" + fill + "'></param>");
document.write ("Sorry, you do not have a Java-enabled browser. Try the printable version.");
document.write ("</applet><br /><br /><br />");

document.write ("<table width='100%'><tr>");
document.write ("<td width='33%'><a href='puzzles/" + puzzdir + puzz + ".html'>Printable Puzzle</a></td>");
document.write ("<td width='33%'><a href='printsol.html?puzz=" + puzz + "'>Printable Solution</a></td>");
document.write ("<td width='33%'><a href='archive.html'>Previous Quick Crosswords</a></td></tr></table><br /><br />");