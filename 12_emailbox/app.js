const getemail = document.getElementById("emails");
const gettextarea = document.querySelector("textarea");
const getbtn = document.querySelector(".btn");
const getemcontainer = document.querySelector(".email-container");

getemail.focus();

getemail.addEventListener("keyup", function (e) {
    
    createemaillist(e.target.value);
});

function createemaillist(inputtext) {
    
    // console.log(inputtext);
    
    // split by (",")                   // remove empty, empty space
    const emitems = inputtext.split(",").filter(function (rmempty) {
        
        return rmempty.trim() !== "";
        
    }).map(function (rmempty) {
        
        return rmempty.trim();
    }); // remove space

    // console.log(emitems);
    
    getemcontainer.innerHTML = "";
    
    emitems.forEach(function (emitem) {
        
        // console.log(emitem);
        
        const setnewspan = document.createElement("span");
        setnewspan.appendChild(document.createTextNode(emitem));
        setnewspan.classList.add("email-item");
        getemcontainer.appendChild(setnewspan);
        
        // console.log(setnewspan);
    });
    
    getbtn.addEventListener("click", function (e) {
        
        sendemail();
        
        e.preventDefault();
    });
    
    function sendemail() {
        
        // console.log("i am working");
        
        const gettextval = gettextarea.value;
        const getemails = document.querySelectorAll(".email-item"); // NodeLists

        var persons = [];
        
        if (getemails.length > 0 && gettextval) {
            
            // console.log(getemail);
            
            getemails.forEach(function (getemail) {
                
                persons.push({
                    email: getemail.textContent,
                    message: gettextval
                });
            });
        } else {
            
            window.alert("Enter Your Message.");
        }

        console.log(persons);
    }
}

// 7EB