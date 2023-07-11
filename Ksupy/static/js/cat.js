var text = document.querySelector('.conteinercat');

    // Функция, которая будет добавлять класс с анимацией при прокрутке
    function animateTextOnScroll() {
        // Получаем позицию прокрутки страницы
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Проверяем, находится ли элемент в области видимости
        if (text.offsetTop < (window.innerHeight + scrollTop)) {
            // Добавляем класс с анимацией
            text.classList.add('animateText');
        } else {
            // Если элемент вышел из области видимости, удаляем класс с анимацией
            text.classList.remove('animateText');
        }
    }

    // Добавляем обработчик события прокрутки страницы
    window.addEventListener('scroll', animateTextOnScroll);