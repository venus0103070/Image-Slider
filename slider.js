const slides = document.querySelectorAll('.slide')
var counter = 0;

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
}
)

const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}


goNext=()=>{
    if (counter == 3){
        counter = -1 ;
    }
    counter = counter + 1
    slideImage()
    
}

goPrev =()=>{
    if (counter  == 0){
        counter = 4;
    }
    counter = counter - 1
    slideImage()

}
