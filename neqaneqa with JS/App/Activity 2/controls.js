function playdetector()
{
    console.log("Media playing");
    alert("playing");
}

function pausedetector()
{
    console.log("Media paused");
    alert("paused");
}

 function changeImage() {
    let src = document.getElementById("image").src;

    document.getElementById("image").src="../../resources/images/mountain.jpg";
   
}
