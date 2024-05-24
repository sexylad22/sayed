// togeling between images in hover

document.addEventListener('DOMContentLoaded', () => {
    const myimg = document.querySelector('.myimg');
    const div1 = document.querySelector('.div1');

    div1.addEventListener('mouseover', () => {
        myimg.src = "ninit.png";
    });
    div1.addEventListener('mouseout', () => {
        myimg.src = "white.png";

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.text');
    const div1 = document.querySelector('.div1');

    div1.addEventListener('mouseover', () => {
        text.classList.remove("text-white");
        text.classList.add("text-[#533223]");
    });
    div1.addEventListener('mouseout', () => {
        text.classList.remove("text-[#533223]");
        text.classList.add("text-white");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelector('.icons');
    const div1 = document.querySelector('.div1');

    div1.addEventListener('mouseover', () => {
        icons.classList.remove("text-white");
        icons.classList.add("text-[#533223]");
    });
    div1.addEventListener('mouseout', () => {
        icons.classList.remove("text-[#533223]");
        icons.classList.add("text-white");
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const text = document.querySelector('.text')
//     const targetDiv = document.querySelector('.targetdiv');
//     const targetDivTopOffset = targetDiv.offsetTop;
//     const icons = document.querySelector('.icons');
//     const myimg = document.querySelector('.myimg');
//     const div1 = document.querySelector('.div1');

//     window.addEventListener('scroll', () => {
//         if (window.pageYOffset >= targetDivTopOffset) {
//             // Add or remove classes as needed
//             myimg.src = "ninit.png";

//             div1.classList.remove("bg-white")
//             div1.classList.add("bg-[#533223]")
//             text.classList.remove("text-white");
//             text.classList.add("text-[#533223]");
//             icons.classList.remove("text-white");
//             icons.classList.add("text-[#533223]");

//         } else {
//             // Reset the classes when the fixed div scrolls back up
//             myimg.src = "white.png";
//             div1.classList.remove("bg-[#533223]")
//             div1.classList.add("bg-white")
//             text.classList.remove("text-[#533223]");
//             text.classList.add("text-white");
//             icons.classList.remove("text-[#533223]");
//             icons.classList.add("text-white");
            
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');   
    const img3 = document.querySelector('.img3')
    

    img1.addEventListener('mouseover', () => {
        img1.src = "ppantsback.webp";
    });
    img1.addEventListener('mouseout', () => {
        img1.src = "pants.png";

    });
    img2.addEventListener('mouseover', () => {
        img2.src = "olpback.webp";
    });
    img2.addEventListener('mouseout', () => {
        img2.src = "pants 2.webp";

    });
    img3.addEventListener('mouseover', () => {
        img3.src = "blteeback.webp";
    });
    img3.addEventListener('mouseout', () => {
        img3.src = "shirt 1.webp";

    });
});

