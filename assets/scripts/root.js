"use-strict";

let returnBackToNormal = undefined;
const heroImage = document.getElementById("hero-image");

const resetHeroImage = () => {
    heroImage.style.transform = "";
}

const move = (e) => {
    let rect = heroImage.getBoundingClientRect();
    let x = e.clientX - rect.left - rect.width / 2, y = e.clientY - rect.top - rect.height / 2;
    let degX = Math.atan2(x, rect.width)/10, degY = Math.atan2(y, rect.height)/10;
    heroImage.style.transform = "rotate3d("+ -degY + ", "+ degX +", 0, 20deg)";
    if(returnBackToNormal !== undefined)
        clearTimeout(returnBackToNormal);
    returnBackToNormal = setTimeout(resetHeroImage, 6000);
}

// if(!isMobile)
//     window.addEventListener("mousemove", move);
