// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the vertiGO character
const vertigoCharacter = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    speed: 2,
    direction: Math.random() * Math.PI * 2,
};

// Define the stars
const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5,
    });
}

// Animate the vertiGO character and stars
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and animate stars
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.fillStyle = '#34C759';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += Math.cos(star.speed) * 0.1;
        star.y += Math.sin(star.speed) * 0.1;

        if (star.x > canvas.width) {
            star.x = 0;
        }
        if (star.y > canvas.height) {
            star.y = 0;
        }
    }

    // Draw and animate vertiGO character
    ctx.fillStyle = '#34C759';
    ctx.fillRect(vertigoCharacter.x, vertigoCharacter.y, vertigoCharacter.width, vertigoCharacter.height);

    vertigoCharacter.x += Math.cos(vertigoCharacter.direction) * vertigoCharacter.speed;
    vertigoCharacter.y += Math.sin(vertigoCharacter.direction) * vertigoCharacter.speed;

    if (vertigoCharacter.x < 0 || vertigoCharacter.x > canvas.width - vertigoCharacter.width) {
        vertigoCharacter.direction = Math.PI - vertigoCharacter.direction;
    }
    if (vertigoCharacter.y < 0 || vertigoCharacter.y > canvas.height - vertigoCharacter.height) {
        vertigoCharacter.direction = -vertigoCharacter.direction;
    }

    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Add event listener for music toggle
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let musicPlaying = false;
musicToggle.addEventListener('click', () => {
    if (!musicPlaying) {
        backgroundMusic.play();
        musicPlaying = true;
    } else {
        backgroundMusic.pause();
        musicPlaying = false;
    }
});