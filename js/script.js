// dev: Francesco Cimino;,
// proj: Carosello Array di Oggetti;
// lang: js;

const arrayImgs = [
    {
        image: 'img/01.webp',
        title: "Francesco Cimino",
        text: "This is an example of description for a random image... boolean class#73!!!",
    }, 
    
    {
        image: 'img/02.webp',
        title: "Francesco Cimino",
        text: "This is an example of description for a random image... boolean class#73!!!",
    }, 
    
    {
        image: 'img/03.webp',
        title: "Francesco Cimino",
        text: "This is an example of description for a random image... boolean class#73!!!",
    }, 
    
    {
        image: 'img/04.webp',
        title: "Francesco Cimino",
        text: "This is an example of description for a random image... boolean class#73!!!",
    }, 
    
    {
        image: 'img/05.webp',
        title: "Francesco Cimino",
        text: "This is an example of description for a random image... boolean class#73!!!",
    }
];

// arrays
const imgsTitle = arrayImgs.map(img => img.title);
const imgsText = arrayImgs.map(img => img.text);

CreateElement(arrayImgs);


const imgsCard = document.getElementsByClassName("card-img");
const imgsCol = document.querySelectorAll(".img-col");

let position = 0;

imgsCard[position].classList.add("active");
imgsCol[position].classList.add("active");
autoScroll(imgsCard, imgsCol);

arrowRigth(arrayImgs, imgsCard, imgsCol);
arrowLeft(imgsCard, imgsCol);
click(imgsCard, imgsCol);

function CreateElement (arrayImg) {
    const upNavBar = document.querySelector(".up-nav-bar")
    const downNavBar = document.querySelector(".down-nav-bar")

    arrayImg.forEach((img) => {
        const upperImg = 
        `
            <div class="card-img">
                <img src="${img.image}" alt="${img.title}">

                <div class="img-text">
                    <h2>${img.title}</h2>
                    <p>${img.text}</p>
                </div>

            </div>
        `
        const lowerImg = 
        `
            <div class="img-col">
                <img src="${img.image}" alt="${img.title}">
            </div>
        `
        upNavBar.innerHTML += upperImg;
        downNavBar.innerHTML += lowerImg;
    })
}



// arrow-right-function
function arrowRigth (imgArray, element1, element2) {
    const arrowRigth = document.querySelector(".right");

    arrowRigth.addEventListener("click", () => {

    element1[position].classList.remove("active");
    element2[position].classList.remove("active");

    if (position < (imgArray.length - 1)){
        position++;

    } else {
        position = 0;
    }

    element1[position].classList.add("active");
    element2[position].classList.add("active");
});
}



// arrow-left-function
function arrowLeft (element1, element2) {
    const leftBtn = document.querySelector(".left");

    leftBtn.addEventListener("click", () => {
    element1[position].classList.remove("active");
    element2[position].classList.remove("active");

    if (position > 0){
        position--;

    } else {
        position = 4;
    }
    
    element1[position].classList.add("active");
    element2[position].classList.add("active");
})
}



// click-function
function click(element1, element2) {
    element2.forEach((img, index) => {
        img.addEventListener("click", () => {
            
            element1[position].classList.remove("active");
            element2[position].classList.remove("active");
           
            position = index;
            
            element1[position].classList.add("active");
            element2[position].classList.add("active");
        })
});
}


let autoScroll1 = true;



// autoscroll-function
function autoScroll (element1, element2) {
    const autoBtn = document.querySelector(".auto-btn")
    const interval = setInterval(() => {

        element1[position].classList.remove("active");
        element2[position].classList.remove("active");
        
        position++;

        if (position > 4)
        position = 0;
        
        element1[position].classList.add("active");
        element2[position].classList.add("active");
        
        autoBtn.addEventListener("click", () => {
            clearInterval(interval);
            autoScroll1 = true;
        })
    }, 3000);
    
    const reverse = document.querySelector(".reverse-btn");
    reverse.addEventListener("click", () => {
        clearInterval(interval);

        if (autoScroll1) {
            const reverseInterval = setInterval(() => {
    
                element1[position].classList.remove("active");
                element2[position].classList.remove("active");
            
                position--;
                if (position < 0)
                position = 4;
            
                element1[position].classList.add("active");
                element2[position].classList.add("active");
    
                autoBtn.addEventListener("click", () => {
                
                clearInterval(reverseInterval);
                })

            }, 2000)

            autoScroll1 = false;
        }

    })
}