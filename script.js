const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 輪郭を描画
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2, false);
ctx.fillStyle = "#F5A623";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 4;
ctx.stroke();

// 目を描画
ctx.beginPath();
ctx.arc(155, 175, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(155, 175, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "#000000";
ctx.fill();

ctx.beginPath();
ctx.arc(245, 175, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(245, 175, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "#000000";
ctx.fill();

// 鼻を描画
ctx.beginPath();
ctx.arc(200, 220, 18, 0, Math.PI * 2, false);
ctx.fillStyle = "#FE3131";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.stroke();

// 口を描画
ctx.beginPath();
ctx.arc(200, 260, 40, 0, Math.PI, false);
ctx.strokeStyle = "#000000";
ctx.lineWidth = 4;
ctx.stroke();
