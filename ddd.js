const trickButton = document.getElementById('trickButton');
const realButton = document.getElementById('realButton');
const resultBox = document.getElementById('resultBox');

// ปุ่มหนีเม้าส์
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const moveAway = (el) => {
    const rect = el.getBoundingClientRect();
    const elX = rect.left + rect.width / 2;
    const elY = rect.top + rect.height / 2;
    const distance = Math.hypot(mouseX - elX, mouseY - elY);

    if (distance < 150) {
      const offsetX = (Math.random() - 0.5) * 400;
      const offsetY = (Math.random() - 0.5) * 400;

      let newX = rect.left + offsetX;
      let newY = rect.top + offsetY;

      newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
      newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

      el.style.left = `${newX}px`;
      el.style.top = `${newY}px`;
    }
  };

  moveAway(trickButton);
});

// ปุ่มจริง: โชว์ผลลัพธ์
realButton.addEventListener('click', () => {
  resultBox.classList.add('show');
});
