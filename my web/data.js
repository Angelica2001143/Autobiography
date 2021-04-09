//this  is for the gallery
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";}


//this is for unloading the page
var forLoader;
function functionLoader() {
    forLoader = setTimeout(Showpage, 3000);

}
function Showpage() {
    document.getElementById('preLoad').style.display = 'none';
    document.getElementById('AutobioShow').style.display = "block";
}



$(document).ready(function () {
    $("#button").click(function () {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://testapi.io/api/AngelicaQuilme143/WEBDEV", true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200 && this.statusText == "OK") {
                var data = JSON.parse(this.responseText);
                for (var e of data) {
                    $("#myTable").append("<tr><td>" + e.Name + "</td><td>" + e.Comment + "</td></tr > ")

                }
            }
        };
    });

    

});