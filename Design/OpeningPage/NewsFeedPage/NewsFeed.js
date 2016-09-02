function loadHeadline() {
	if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("NewsUpdate").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "NewsFeed.php", true);
  xhttp.send();
}
