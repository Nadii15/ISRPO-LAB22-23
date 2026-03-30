const form = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const hobbyInput = document.getElementById('hobby');
const resultDiv = document.getElementById('result');
const clearBtn = document.getElementById('clearBtn');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!nameInput.value.trim() || 
        !ageInput.value.trim() || 
        !cityInput.value.trim() || 
        !hobbyInput.value.trim()) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const age = parseInt(ageInput.value);
    if (isNaN(age) || age <= 0 || age > 120) {
        alert('Введите корректный возраст (от 1 до 120)');
        return;
    }

    displayProfile();
});

function displayProfile() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const city = cityInput.value.trim();
    const hobby = hobbyInput.value.trim();

    resultDiv.innerHTML = `
        <h2>Данные профиля:</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Город:</strong> ${city}</p>
        <p><strong>Хобби:</strong> ${hobby}</p>
    `;
    resultDiv.style.display = 'block';
}

clearBtn.addEventListener('click', function() {
    form.reset();
    resultDiv.style.display = 'none';
    resultDiv.innerHTML = '';
});
