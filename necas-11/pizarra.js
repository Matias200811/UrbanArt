// Coordenadas de la pizarra en un espacio de 560 por 340.
const board = document.querySelector('canvas');
const ctx = board.getContext('2d');
function drawCourt() {
  const scale = Math.min(window.devicePixelRatio || 1, 3) * board.clientWidth / 560;
  if (!scale || !ctx) return;
  board.width = Math.round(560 * scale);
  board.height = Math.round(340 * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#aac2a4';
  ctx.fillStyle = '#204b3e';
  ctx.fillRect(12, 12, 536, 316);
  ctx.strokeRect(12, 12, 536, 316);
  function line(x, y, endX, endY) {
    ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(endX,endY); ctx.stroke();
  }
  function circle(x,y,r) {
    ctx.beginPath(); ctx.arc(x,y,r,0,2*Math.PI); ctx.stroke();
  }
  line(280,12,280,328);
  circle(280,170,40);
  for (const flip of [false,true]) {
    ctx.save();
    if (flip) { ctx.translate(560,0); ctx.scale(-1,1); }
    ctx.strokeRect(12,126,98,88);
    circle(110,170,32);
    ctx.beginPath(); ctx.arc(28,170,125,-Math.PI/2,Math.PI/2); ctx.stroke();
    line(27,155,27,185); circle(35,170,7);
    ctx.restore();
  }
  ctx.lineWidth = 4; ctx.strokeStyle = '#faf4df';
  for (const [x,y] of [[227,235],[358,213],[398,100]]) {
    line(x-6,y-6,x+6,y+6); line(x+6,y-6,x-6,y+6);
  }
  ctx.strokeStyle = '#ffad70'; ctx.setLineDash([8,8]);
  ctx.beginPath(); ctx.moveTo(167,102); ctx.bezierCurveTo(265,47,310,210,423,158); ctx.stroke();
  ctx.setLineDash([]); line(409,155,425,157); line(425,157,418,172);
  ctx.fillStyle = '#ff8749'; ctx.beginPath(); ctx.arc(161,105,15,0,2*Math.PI); ctx.fill();
  ctx.save(); ctx.clip(); ctx.strokeStyle='#63371d'; ctx.lineWidth=2;
  line(145,99,177,111); line(154,121,168,89); circle(141,88,20); circle(183,123,20); ctx.restore();
}
drawCourt();
window.addEventListener('resize', drawCourt);
