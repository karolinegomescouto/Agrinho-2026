const toggleButton = document.getElementById('toggleButton');
const extraText = document.getElementById('extraText');

toggleButton.addEventListener('click', () => {
    if (extraText.classList.contains('visible')) {
        extraText.classList.remove('visible');
        extraText.classList.add('hidden');
        toggleButton.textContent = 'Saiba Mais';
    } else {
        extraText.classList.remove('hidden');
        extraText.classList.add('visible');
        toggleButton.textContent = 'Mostrar Menos';
    }
});