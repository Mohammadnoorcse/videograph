const carousel =document.querySelector(".section-six-content")

// moving
let isDragStart =false,prevPageX,preScrollLeft;

const dragStart =(e)=>{
    isDragStart = true;
    prevPageX = e.pageX;
    preScrollLeft = carousel.scrollLeft;
    carousel.computedStyleMap.scrollBehavior = "smooth";
}

const dragging=(e)=>{
    // console.log(e.pageX);
    if(!isDragStart)return;
    e.preventDefault();
    // carousel.scrollLeft = e.pageX;
    let positionDiff = e.pageX -prevPageX;
    carousel.scrollLeft = preScrollLeft -positionDiff;
    carousel.computedStyleMap.scrollBehavior = "smooth";
}
const dragStop=()=>{
    isDragStart = false;
    carousel.computedStyleMap.scrollBehavior = "smooth";
}

carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("mouseup",dragStop)



const slides = document.querySelectorAll(".carousel-slide");
console.log(slides)