var gettablinks = document.getElementsByClassName("tablinks"); // HTML Collection
var gettabpanes = document.getElementsByClassName("tab-pane");
// console.log(gettabpanes);
var getbtncloses = document.querySelectorAll(".btn-close"); // NodeList

var tabpanes = Array.from(gettabpanes);

function gettab(event, linkid) {

    tabpanes.forEach(function(tabpane){

        tabpane.style.display = "none";
    });

    for(var x = 0; x < gettablinks.length; x++) {

        gettablinks[x].className = gettablinks[x].className.replace(" active", "");

        getbtncloses[x].addEventListener("click", function() {

            this.parentElement.style.display = "none";
        });
    }
    
    document.getElementById(linkid).style.display = "block";

    // event.target.className += " active";
    // event.target.className = event.target.className.replace("tablinks", "tablinks active");
    // event.target.classList.add("active");

    // console.log(event);
    // console.log(event.target);
    // console.log(event.currentTarget);

    event.currentTarget.className += " active";
}

document.getElementById("autoclick").click();

// 22TB