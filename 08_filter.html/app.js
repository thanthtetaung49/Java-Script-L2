var getinput = document.getElementById("search");
var getul = document.getElementById("members");
var getli = getul.getElementsByTagName("li");
// console.log(getli);
var getsortazm1btn = document.getElementById("sortazm1");
var getsortzam1btn = document.getElementById("sortzam1");
var getsortazm2btn = document.getElementById("sortazm2");
var getsortzam2btn = document.getElementById("sortzam2");

getsortazm1btn.addEventListener("click", sortingatozm1); // sort a to z m1 button

getsortzam1btn.addEventListener("click", sortingztoam1); // sort z to a m1 button

getsortazm2btn.addEventListener("click", sortingatozm2); // sort a to z m2 button

getsortzam2btn.addEventListener("click", sortingztoam2); // sort z to a m2 button

getinput.addEventListener("keyup", filter);

// start filter function
function filter() {

    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for(var x = 0; x < getli.length; x++) {

        // console.log(getli[x]);
        // console.log(getli[x].querySelector("a").innerText.toLowerCase());
        // console.log(getli[x].getElementsByTagName("a")[0].textContent.toLowerCase());

        var getvalue = getli[x].querySelector("a").innerText.toLowerCase();

        if(getvalue.indexOf(inputfilter) > -1) {

            getli[x].style.display = "";
        } else {

            getli[x].style.display = "none";
        } 
    }
} // end filter function

// METHOD 1
// start sortin a to z function
function sortingatozm1() {
    // console.log("i am working");

    var liarys = [];

    for(var i = 0; i < getli.length; i++) {
        
        // console.log(getli[i]);
        // console.log(getli[i].textContent);

        liarys.push(getli[i].textContent);
    }

    // console.log(liarys);
    // console.log(liarys.sort());
    // console.log(liarys.sort().reverse());

    var azlis = liarys.sort();

    getul.innerHTML = "";

    azlis.forEach(function(azli) {

        // console.log(azli);

        var newli = document.createElement("li");
        var newlink = document.createElement("a");

        newlink.href = "javascript:void(0);";
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        getul.appendChild(newli);

        // console.log(newli);
    });
} // end sorting a to z function

// start sorting z to a function
function sortingztoam1() {

    var liztoaarys = [];

    for(var j = 0; j < getli.length; j++) {

        liztoaarys.push(getli[j].textContent);
    }

    // console.log(liztoaarys.sort().reverse());

    var zalis = liztoaarys.sort().reverse();
    // console.log(zalis);

    getul.innerHTML = "";

    zalis.forEach(function(zali) {

        // console.log(zali);

        var getnewli = document.createElement("li");
        var getnewlink = document.createElement("a");
        getnewlink.href = "javascript:void(0);";
        getnewlink.appendChild(document.createTextNode(zali));
        getnewli.appendChild(getnewlink);

        getul.appendChild(getnewli);

        // console.log(getnewli);
    });
} // end sorting z to a function

// METHOD 2
function sortingatozm2() {

    var shouldswitch = true;
    var switching = true;

    do {

        switching = false;

        var k = 0;

        for(k; k < getli.length - 1; k++) {

            shouldswitch = false;

            // first < second => A to Z 
            if(getli[k].textContent.toLowerCase() > getli[k+1].textContent.toLowerCase()) { // false condition
                
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch) {

            // parentElement.insertBefore(new, old);
            getli[k].parentElement.insertBefore(getli[k + 1], getli[k]);
            switching = true;
        }
    } while (switching);
}

function sortingztoam2() {

    var shouldswitch = true;
    var switching = true;

    do {

        switching = false;

        var k = 0;

        for(k; k < getli.length - 1; k++) {

            shouldswitch = false;

            // First >  Second = > Z to A 
            if(getli[k].textContent.toLowerCase() < getli[k+1].textContent.toLowerCase()) { // false condition
                
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch) {

            // parentElement.insertBefore(new, old);
            getli[k].parentElement.insertBefore(getli[k + 1], getli[k]);
            switching = true;
        }
    } while (switching);
}

// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());

//                         // Aung Aung      Maung Maung 
// if(getli[0].textContent.toLowerCase > getli[1].textContent.toLowerCase()) {
//     console.log("true");
// } else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()) {
//     console.log("equal")
// } else {
//     console.log("false");
// }

// 23FT

// 24PN