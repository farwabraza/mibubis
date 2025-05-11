
document.addEventListener("mousemove", function(e) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = (e.pageX - 7.5) + "px";
  heart.style.top = (e.pageY - 7.5) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});

function showLoveNote() {
  document.querySelector('.envelope').classList.add('open');
}

function openEnvelope() {
  document.querySelector('.envelope').classList.add('open');
}

window.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play().catch(() => {});
  }
});
