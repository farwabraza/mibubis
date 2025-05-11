// Mouse hearts effect – disabled on mobile
if (!/Mobi|Android/i.test(navigator.userAgent)) {
  document.addEventListener("mousemove", function(e) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = (e.pageX - 7.5) + "px";
    heart.style.top = (e.pageY - 7.5) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  });
}

function openEnvelope() {
  document.querySelector('.envelope').classList.add('open');
}

// Auto-play music on click
window.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    music.play().catch(() => {});
  }
});

// Timeline image swapping
const eventImage = document.getElementById("event-image");
const eventBlocks = document.querySelectorAll(".event");

eventBlocks.forEach(event => {
  event.addEventListener("mouseenter", () => {
    const imgSrc = event.getAttribute("data-img");
    if (imgSrc) {
      eventImage.src = imgSrc;
    }
  });
});
