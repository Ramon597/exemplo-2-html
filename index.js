var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const ativ = btn.getAttribute("class");
    if (ativ == "active") {
        body.style.background = "#333";
        body.style.color = "#fff";
        
    } else {
        body.style.background = "#fff";
        body.style.color = "#333";
    }

})

