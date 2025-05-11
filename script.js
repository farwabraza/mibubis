// Wait for document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Hide loading overlay after page loads
  const loadingOverlay = document.getElementById('loading-overlay');
  
  // Hide the loading overlay after a short delay
  setTimeout(() => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  }, 1000);
  
  // Initialize features
  initFloatingHearts();
  initEnvelope();
  initTimeline();
  initDailyLoveMessages();
  initMusicControls();
});

// Create floating hearts background
function initFloatingHearts() {
  const heartsContainer = document.getElementById('floating-hearts');
  
  // Create initial floating hearts
  for (let i = 0; i < 15; i++) {
    createFloatingHeart();
  }
  
  // Create a new heart every 3 seconds
  setInterval(createFloatingHeart, 3000);
  
  function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    
    // Random position, size and duration
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.animationDuration = Math.random() * 6 + 6 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Remove the heart after animation completes
    setTimeout(() => {
      heart.remove();
    }, 12000);
  }
}

// Initialize envelope functionality
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  
  // Open the envelope when clicked
  envelope.addEventListener('click', function() {
    this.classList.add('open');
  });
}

// Initialize timeline functionality
function initTimeline() {
  const eventImage = document.getElementById('event-image');
  const events = document.querySelectorAll('.event');
  
  events.forEach(event => {
    event.addEventListener('click', function() {
      // Remove active class from all events
      events.forEach(e => e.classList.remove('active'));
      
      // Add active class to clicked event
      this.classList.add('active');
      
      // Change the image with fade effect
      const imgSrc = this.getAttribute('data-img');
      if (imgSrc) {
        // Fade out
        eventImage.style.opacity = '0';
        
        // Change image and fade in after a short delay
        setTimeout(() => {
          eventImage.src = imgSrc;
          eventImage.style.opacity = '1';
        }, 300);
      }
    });
  });
}

// Initialize daily love messages functionality
function initDailyLoveMessages() {
  const loveMessages = [
    "You're the first thing I think about when I wake up and the last thing I think about before I fall asleep.",
    "Every moment with you makes life more beautiful.",
    "You make my heart smile in ways no one else can.",
    "In your eyes, I've found my home.",
    "Your love is the greatest gift I've ever received.",
    "When I'm with you, I feel like the luckiest person alive.",
    "You make ordinary moments feel extraordinary.",
    "I never knew I could love someone the way I love you.",
    "Your smile brightens even my darkest days.",
    "Forever won't be long enough to spend with you.",
    "Being with you feels like coming home.",
    "Your love gives me strength I never knew I had.",
    "You're the reason I believe in love.",
    "I love you more than yesterday, but less than tomorrow.",
    "Meeting you was fate, becoming your boyfriend was a choice, but falling in love with you was beyond my control.",
    "You're my favorite notification.",
    "I'd choose you in a hundred lifetimes, in a hundred worlds, in any version of reality.",
    "Every second, every minute, every hour spent with you is time well spent.",
    "You're the missing piece I never knew I needed.",
    "You make my heart beat in ways I didn't know it could.",
    "Loving you is as natural as breathing.",
    "My favorite place in the world is next to you.",
    "With you, even the smallest moments feel magical.",
    "You're the best part of my day, every day.",
    "I didn't know what it meant to truly smile until I met you.",
    "You make my heart feel like it's dancing.",
    "Being loved by you is like a dream I never want to wake up from.",
    "My heart recognized you before my eyes did.",
    "You're the rhythm to my heart's beat.",
    "With you, I've found the love I've always dreamed of.",
    "Your love is the greatest adventure I've ever been on."
  ];
  
  const loveMessage = document.getElementById('love-message');
  const messageSection = document.querySelector('.message-section');
  const messageBtn = document.getElementById('message-btn');
  
  // Function to get a consistent daily message
  function getDailyMessage() {
    // Get current date and create a simple hash
    const today = new Date();
    const dateString = `${today.getMonth() + 1}${today.getDate()}${today.getFullYear()}`;
    
    // Use date to get a consistent index for today
    const dateSum = dateString.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    const todayIndex = dateSum % loveMessages.length;
    
    return loveMessages[todayIndex];
  }
  
  // Display today's message
  function displayTodaysMessage() {
    const message = getDailyMessage();
    
    // Fade out current message
    loveMessage.style.opacity = '0';
    
    // Update and fade in new message after a short delay
    setTimeout(() => {
      loveMessage.textContent = message;
      loveMessage.style.opacity = '1';
    }, 300);
  }
  
  // Update the message section heading
  messageSection.querySelector('h2').textContent = "Your Daily Love Message";
  
  // Initially show today's message
  loveMessage.textContent = getDailyMessage();
  setTimeout(() => {
    loveMessage.style.opacity = '1';
  }, 1000);
  
  // Change the button to show a random message instead
  messageBtn.textContent = "Get Another Love Message";
  messageBtn.addEventListener('click', function() {
    // Get a random message that's not today's message
    let randomIndex;
    let todayIndex = loveMessages.indexOf(getDailyMessage());
    
    do {
      randomIndex = Math.floor(Math.random() * loveMessages.length);
    } while (randomIndex === todayIndex);
    
    const message = loveMessages[randomIndex];
    
    // Fade out current message
    loveMessage.style.opacity = '0';
    
    // Update and fade in new message after a short delay
    setTimeout(() => {
      loveMessage.textContent = message;
      loveMessage.style.opacity = '1';
    }, 300);
  });
  
  // Add a small note about daily messages
  const noteElement = document.createElement('p');
  noteElement.classList.add('message-note');
  noteElement.textContent = "A new message appears each day";
  noteElement.style.fontSize = "0.8rem";
  noteElement.style.color = "rgba(255, 255, 255, 0.7)";
  noteElement.style.marginTop = "10px";
  messageSection.appendChild(noteElement);
}

// Initialize music controls
function initMusicControls() {
  const music = document.getElementById('bg-music');
  const musicToggle = document.createElement('button');
  musicToggle.id = 'music-toggle';
  document.body.appendChild(musicToggle);
  
  let isPlaying = false;
  
  // Toggle music play/pause
  musicToggle.addEventListener('click', function() {
    if (isPlaying) {
      music.pause();
      musicToggle.classList.remove('playing');
    } else {
      music.play().catch(error => {
        console.log('Audio play failed:', error);
      });
      musicToggle.classList.add('playing');
    }
    
    isPlaying = !isPlaying;
  });
  
  // Auto-play music on first interaction with the page
  document.body.addEventListener('click', function initialPlay() {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        musicToggle.classList.add('playing');
      }).catch(error => {
        console.log('Initial audio play failed:', error);
      });
    }
    
    // Remove this listener after first click
    document.body.removeEventListener('click', initialPlay);
  }, { once: true });
}
