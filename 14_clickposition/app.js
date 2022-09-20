const getmap = document.querySelector(".map-container");

// Group Variable use comma
var getsmallcolor = document.getElementById("smallcolor"),
getmediumcolor = document.getElementById("mediumcolor"),
getlargecolor = document.getElementById("largecolor");

var circleidx = 0;

getmap.addEventListener("click", function (e) {
    
    circleidx++;
    
    // console.log("i am working");
    
    // console.log(e.target);
    
    if (e.target.classList.contains("map-container")) {
        const cx = e.clientX;
        const cy = e.clientY;
        
        // console.log(cx, cy);
        
        const mapleft = e.target.offsetLeft;
        const maptop = e.target.offsetTop;
        
        console.log(mapleft, maptop);
        
        const currentx = cx - mapleft;
        // console.log(currentx);
        const currenty = cy - maptop;
        // console.log(currenty)
        
        console.log(currentx, currenty);
        
        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.id = circleidx;
        
        // console.log(circle);
        
        circle.style.left = `${currentx}px`;
        circle.style.top = `${currenty}px`;
        
        // console.log(circle);
        
        e.target.appendChild(circle);
        
        // console.log(e.target);
        
        // .selectedIndex is checked the selected option with index number
        console.log(getsmallcolor.selectedIndex);
        
        if (getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0) {
        
            // .setProperty is call the properties of css
            circle.style.setProperty("--small-color", getsmallcolor.value);
            circle.style.setProperty("--medium-color", getmediumcolor.value);
            circle.style.setProperty("--large-color", getlargecolor.value);
        }
        
        // circle.style.setProperty("--small-color", getsmallcolor.value);
        // circle.style.setProperty("--medium-color", getmediumcolor.value);
        // circle.style.setProperty("--large-color", getlargecolor.value);
    }
    
    removepointer(e);
});

function removepointer(e) {
    
    // console.log(e.target);
    // console.log(e.target.id);
    
    if (e.target.id > 0) {
        
        e.target.remove();
    }
}

// 13MP