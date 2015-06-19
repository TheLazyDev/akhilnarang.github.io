var r = confirm("Press a button to crash your browser");
if (r == true) {
    for(var i=0;;i++)
	console.log(i);
} else {
    x = "You pressed Cancel!";
}
