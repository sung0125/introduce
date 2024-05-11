// 로딩
$(window).load(function () {
    $(".loading-container").delay(2000).fadeOut();
});

// 메인화면 에니메이션
const text = document.querySelector(".title h1");
const content = "안녕하세요 :)\n24학번 전성배입니다.";
let contentIndex = 0;

let typing = function () {
    text.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === "\n") {
        text.innerHTML += "<br />";
        contentIndex++;
    }
    if (contentIndex > content.length) {
        text.textContent = "";
        contentIndex = 0;
    }
};
setInterval(typing, 200);

//스크롤 애니메이션

// Favorite Slide
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;

let currentIdx = 0;

let slideWidth = 300;
let slideMargin = 30;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function moveSlide(num) {
    // slide 가 움직일때 slide index가 1이면 -330px 2면 -660px
    slides.style.left = -num * 330 + "px";
    currentIdx = num;
}

nextBtn.addEventListener("click", function () {
    if (currentIdx < slideCount - 3) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

prevBtn.addEventListener("click", function () {
    if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
});

let contactTilte = document.querySelector("#footer .footer-box");
let contactLink = document.querySelector("#footer div");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (value > 1950) {
        contactTilte.style.animation = "grow 0.8s linear";
        contactLink.style.animation = "grow 0.8s linear";
    } else {
        contactTilte.style.animation = "grow-out 0.5s linear";
        contactLink.style.animation = "grow-out 0.5s linear";
    }
});
