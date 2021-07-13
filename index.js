
const inputs = document.querySelectorAll('.filters input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
      document.querySelector(`.filters output[name=${this.name}]`).textContent = this.value;
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// Обработчик кнопок

  //Reset
document.querySelector('.btn-container .btn-reset').onclick = function() {
  inputs.forEach(function reset (input) {
    const suffix = input.dataset.sizing || '';
    if (input.name == "saturate") {
      input.value = "100";
      document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
      document.querySelector(`.filters output[name=${input.name}]`).textContent = input.value;
    } else {
      input.value = "0";
      document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
      document.querySelector(`.filters output[name=${input.name}]`).textContent = input.value;
    }
  })
}

  //Next pictuer
let date = new Date();
let hours = date.getHours();
let hoursPikcher = "";
if (hours >=6 && hours< 12) hoursPikcher = "morning";
if (hours >=12 && hours< 18) hoursPikcher = "day";
if (hours >=18 && hours< 24) hoursPikcher = "evening";
if (hours >=0 && hours< 6) hoursPikcher = "night";

let imgUrl = "";
let namberPikcher = 0;
document.querySelector('.btn-container .btn-next').onclick = function () {
  imgUrl = document.getElementById('nextImg').src;
  console.log(imgUrl)
  let reg = /assets/i;
  if (reg.test(imgUrl)) {
    namberPikcher = 1;
    console.log(namberPikcher);
  }
  else {
    ++namberPikcher;
  }
  if (namberPikcher > 20) {
    namberPikcher = 1;
  }
  let namberPikcherNul = namberPikcher;
  if (namberPikcherNul < 10) {
    namberPikcherNul = ('0' + namberPikcherNul).slice(-2);}
  console.log(namberPikcherNul)
  document.querySelector('#nextImg').src = `https://github.com/Egor-bog/photo-filter-image/raw/main/images/${hoursPikcher}/${namberPikcherNul}.jpg`;
}

  //Load picture
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    document.querySelector('#nextImg').src = img.src;
  }
  reader.readAsDataURL(file);
});


const canvas = document.querySelector('canvas');

function drawImage() {
  const img = new Image();  
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = "assets/img/img.jpg";
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
  }; 
}
drawImage()