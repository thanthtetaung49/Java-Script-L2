const getimageboxes = document.querySelectorAll(".imgbox");

getimageboxes.forEach(function (getimageboxes, idx) {
    
    // console.log(getimageboxes);
    // console.log(idx);

    getimageboxes.addEventListener("click", function () {
        
        // console.log(idx);
        showbox(idx); // click Event Index Number
    });
});

function showbox(idx) {

    // console.log(idx);
    getimageboxes.forEach(function (imagebox, currentidx) {
        
        // console.log("from parameter = ", idx);
        // console.log("from current = ", currentidx); // imagex box index number
        // console.log(imagebox);

        if (idx === currentidx) {
            
            imagebox.classList.add("show");

            imagebox.addEventListener("click", function (e) {
                
                // console.log(e.target);
                // console.log(e.target.className);
                // console.log(this);

                if (e.target.className === "btn-close") {
                    
                    this.classList.remove("show");
                }

                if (e.target.className == "btn") {

                    const subbtn = this.querySelector(".btn");
                    // const subbtn = getimageboxes[idx].querySelector(".btn");
                    // const subbtn = imagebox.querySelector(".btn");

                    // console.log(subbtn);

                    subbtn.textContent = "Subscribed";
                }
            });
        } else {

            imagebox.classList.remove("show");
        }
    });
}

// 12IB