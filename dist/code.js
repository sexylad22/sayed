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



