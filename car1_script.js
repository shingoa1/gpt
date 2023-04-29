const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const carWidth = 100;
const carHeight = 60;
const wheelRadius = 20;
let carX = -carWidth;
let speed = 5;

function drawCar(x) {
  // 車の本体
  ctx.fillStyle = 'red';
  ctx.fillRect(x, 100, carWidth, carHeight);

  // 車輪
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(x + wheelRadius, 160, wheelRadius, 0, Math.PI * 2);
  ctx.arc(x + carWidth - wheelRadius, 160, wheelRadius, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar(carX);
  carX += speed;
  if (carX > canvas.width) {
    carX = -carWidth;
  }
  requestAnimationFrame(animate);
}

animate();
