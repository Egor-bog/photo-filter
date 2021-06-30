
const inputs = document.querySelectorAll('.filters input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
      document.querySelector(`.filters output[name=${this.name}]`).textContent = this.value;
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// Обработчик кнопок

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