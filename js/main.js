// 메인화면 에니메이션
const content = "Hello, I'm Sungbae!";
const text = document.querySelector(".title h1");
let textidx = 0;

function typing() {
    let txt = content[textidx++];
    text.innerHTML += txt;

    if (textidx > content.length) {
        text.textContent = "";
        textidx = 0;
    }
}
setInterval(typing, 200);

//스크롤 애니메이션
