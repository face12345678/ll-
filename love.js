const gif = document.getElementById('gif');
const question = document.getElementById('question');
const btnContainer = document.getElementById('btnContainer');
let yesBtnSize = 18;
let noCount = 0;

// gif ที่จะแสดงสลับเมื่อกด No
let gifs = [
    "https://media.tenor.com/76BaX0eo304AAAAj/kitty-kitty-heart.gif",
    "https://media1.tenor.com/m/wVAjxnPa81IAAAAd/cat-cat-gif.gif",
    "https://media1.tenor.com/m/f6ts3WWJa-8AAAAC/funny-cats-funny.gif",
    "https://media1.tenor.com/m/kEZzd8WrRpAAAAAC/peach-peach-and-goma.gif",
    "https://media.tenor.com/C35t4Pf5GlgAAAAi/peach-and-goma-cute.gif",
    "https://media1.tenor.com/m/troWhJKIjZsAAAAC/hey-cat.gif"
];

function initButtons() {
    btnContainer.innerHTML = `
    <button class="btn yes" id="yesBtn">Yes 💕</button>
    <button class="btn no" id="noBtn">No 😢</button>
  `;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => yesClick(yesBtn));
    noBtn.addEventListener('click', () => noClick(yesBtn, noBtn));
}

function resetPage() {
    noCount = 0;
    yesBtnSize = 18;
    question.textContent = "รักเค้าไหม? 💖";
    gif.src = "https://media.tenor.com/76BaX0eo304AAAAj/kitty-kitty-heart.gif";
    initButtons();
}

function yesClick(yesBtn) {
    gif.src = "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
    question.textContent = "เย่ เค้าก็รักเธอเหมือนกัน 💗";
    btnContainer.innerHTML = `<button class="btn" id="homeBtn">Home 🏠</button>`;
    document.getElementById('homeBtn').addEventListener('click', resetPage);
}

function noClick(yesBtn, noBtn) {
    yesBtnSize += 10;
    yesBtn.style.fontSize = yesBtnSize + 'px';
    noCount++;
    gif.src = gifs[noCount];
    if (noCount >= 5) {
        noBtn.remove();
        yesBtn.textContent = "Love ❤️";
        yesBtn.classList.add('love');
        yesBtn.onclick = () => {
            gif.src = "https://media1.tenor.com/m/qR1sGRNmfqsAAAAC/besito-catlove.gif";
            question.innerHTML = `<div class="message-box">รักเหมือนกันนนอิอิ 💞</div>`;
            btnContainer.innerHTML = `<button class="btn" id="homeBtn">Home 🏠</button>`;
            document.getElementById('homeBtn').addEventListener('click', resetPage);
        };
    }
}

resetPage();