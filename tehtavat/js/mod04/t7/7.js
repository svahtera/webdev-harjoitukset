const imgTrigger = document.getElementById("trigger")
const imgTarget = document.getElementById("target")

imgTrigger.addEventListener("mouseover", function() {
    imgTarget.src="img/picB.jpg"
})

imgTrigger.addEventListener("mouseout", function() {
    imgTarget.src="img/picA.jpg"
})

