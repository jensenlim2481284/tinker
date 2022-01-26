let width, height;
let pixels = [];
let coloredPixels = [];
let colors = ['#E79936', '#B76C0D', '#BF935A', '#853A1B', '#F3C893'];
let currentPixel = 0;

const canvas = document.getElementById('whyCanvas');
const ctx = canvas.getContext('2d');

const drawGrid = () => {
  ctx.clearRect(0, 0, width, height);

  for (var i = 0, l = pixels.length; i < l; i++) {
    pixels[i][4] = 0;
  }

  for (var i = 0, l = coloredPixels.length; i < l; i++) {

    pixelX = (width<=520)?Math.floor(coloredPixels[i].y / 50) : Math.floor(coloredPixels[i].y / 20) 
    pixelW = (width%10 == 0)? (Math.floor(width / 10) ):(Math.floor(width / 10) +1 )
     
    var pix = pixelX *pixelW + Math.floor(coloredPixels[i].x / 10);    

    if (pixels[pix]) {
      pixels[pix][4] = coloredPixels[i].color;
      pixels[pix][5] = coloredPixels[i].alpha;
    }

    if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
    if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
    coloredPixels[i].x += coloredPixels[i].vx ;
    coloredPixels[i].y += coloredPixels[i].vy;
  }

  for (var i = 0, l = pixels.length; i < l; i++) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#111';
    ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    ctx.globalAlpha = pixels[i][5];
    ctx.fillStyle = pixels[i][4];
    ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
  }
};

const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  pixels = [];
  for (var y = 0; y < height / 10; y++) {
    for (var x = 0; x < width / 10; x++) {
      pixels.push([x * 10, y * 10, 4, 4, '#111', 1]);
    }
  }
};


  
const draw = () => {
   
   setTimeout(() => {
        launchPixel();
        drawGrid();
        requestAnimationFrame(draw);
   }, 300);

};

const initColoredPixels = () => {
  for (var i = 0; i < 300; i++) {
    coloredPixels.push({
      x: width / 2,
      y: height / 2,
      alpha: Math.random()<0.5?0:1,
      color: colors[i % 5],
      vx: -4 + Math.random() * 8,
      vy: -4 + Math.random() * 8 });
  }
};

const launchPixel = () => {
  coloredPixels[currentPixel].alpha = 1;
  currentPixel++;
  if (currentPixel > 150) currentPixel = 0;
};

resize();
initColoredPixels();
draw();
