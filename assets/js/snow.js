let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let section = document.querySelector(".sunkissed_hero");
canvas.width = section.offsetWidth;
canvas.height = section.offsetHeight;
let nearParticles = [],
    middleParticles = [],
    farParticles = [];
let particleSettings = {
    count: 250,
    //count for each layer. Increase/Decrease based on requirement
};

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

// Random number in given range
function randomNumberGenerator(min, max) {
    return Math.random() * (max - min) + min;
}

function createsnowfall(particles, flag) {
    while (particles.length < particleSettings.count) {
        let particle;
        //create particles based on flag
        if (flag === "near") {
            //(area,alpha,vy)
            particle = new Particle(4, 0.9, 0.3);
        } else if (flag === "middle") {
            particle = new Particle(3, 0.5, 0.2);
        } else {
            particle = new Particle(2, 0.3, 0.1);
        }
        particle.color = `rgb(255,255,255)`;
        particles.push(particle);
    }
}

function startSnowFall() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas instead of filling with black
    createsnowfall(nearParticles, "near");
    createsnowfall(farParticles, "far");
    createsnowfall(middleParticles, "middle");
    //combine all and sort randomly
    let particles = [...nearParticles, ...middleParticles, ...farParticles];
    particles = particles.sort(() => 0.5 - Math.random());
    for (let i in particles) {
        particles[i].draw();
        // If particle has crossed screen height
        if (particles[i].y > canvas.height) {
            particles[i].y = Math.random() * canvas.height - canvas.height;
        }
    }
    window.requestAnimationFrame(startSnowFall);
}

function Particle(areaValue, alphaValue, vyValue) {
    this.area = areaValue;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.alpha = alphaValue;
    this.vy = vyValue * 20;
}

Particle.prototype = {
    draw: function () {
        this.y += (Math.cos(this.area) + this.vy) * 0.3;
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.area, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.globalAlpha = this.alpha;
        context.closePath();
        context.fill();
        context.restore();
    },
};

window.onload = () => {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
    nearParticles = [];
    middleParticles = [];
    farParticles = [];
    window.requestAnimationFrame(startSnowFall);
};

window.addEventListener('resize', () => {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
});
