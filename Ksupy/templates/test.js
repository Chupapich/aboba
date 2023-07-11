// Сгенерировать случайное число в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Создать сакуру в случайном месте и с задержкой
function createSakura() {
  const container = document.querySelector('.sakura-container');
  const sakura = document.createElement('div');
  sakura.classList.add('sakura');

  const randomDelay = getRandomNumber(0, 4);
  sakura.style.animationDelay = `${randomDelay}s`;

  const randomSize = getRandomNumber(10, 30);
  sakura.style.width = `${randomSize}px`;
  sakura.style.height = `${randomSize}px`;

  const randomPosition = getRandomNumber(-100, 100);
  sakura.style.left = `${randomPosition}px`;

  container.appendChild(sakura);

  setTimeout(() => {
    container.removeChild(sakura);
  }, 4000);
}

// Создать несколько сакур на странице
function createSakuraBlossom() {
  for (let i = 0; i < 10; i++) {
    createSakura();
  }
}

createSakuraBlossom();