const form = document.getElementById('cooperation-form');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці відправлення форми

    // Збираємо дані з форми
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Створення URL для відправки даних (замініть 'your_email@example.com' на вашу електронну адресу)
    const url = `mailto:kovalchukdariia5678@gmail.com?subject=Нове повідомлення з сайту&body=${encodeURIComponent(JSON.stringify(formObject))}`;

    // Створення посилання для відправки даних
    const link = document.createElement('a');
    link.href = url;
    link.click();

    // Відкриття модального вікна
    modal.style.display = 'block';
});

// Закриття модального вікна
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриття модального вікна при кліку поза ним
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.style.display = 'none';
    }
};


import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    input: 'index.html',
  },
});


import lightbox from 'lightbox2';

lightbox.activate();