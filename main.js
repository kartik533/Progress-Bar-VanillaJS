const progressBar = document.querySelector('.progress-bar');
const input = document.querySelector('.inp');

input.addEventListener('change', (e) => {
    progressBar.style.width = e.target.value + '%';
    progressBar.style.opacity = 1;
    progressBar.innerHTML = e.target.value + '%';
})