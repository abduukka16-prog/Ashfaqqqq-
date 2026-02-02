const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");

// No button escapes 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes button ❤️
yesBtn.addEventListener("click", () => {
  bgMusic.play();

  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:#fff0f5;
      text-align:center;
    ">
      <h1 style="color:#ff4d6d;font-size:3rem;">
        I knew it! 💖🥰
      </h1>
      <p style="font-size:1.4rem;">
        Forever together 💕
      </p>
    </div>
  `;
});
