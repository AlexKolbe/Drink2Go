/**
 * Модуль для работы с выпадающим меню навигации.
 * Управляет открытием и закрытием мобильного меню.
 * @module dropdown
 */

const mainNavigation = document.querySelector('.main-nav');
const mainNavigationToggle = document.querySelector('.main-nav__toggle');

/**
 * Переключает состояние выпадающего меню.
 * Добавляет или удаляет CSS-классы для анимации и отображения меню.
 * @function
 */
const setDropdownState = () => {
  // Переключаем классы 'main-nav--closed' и 'main-nav--opened'
  // Эти классы управляют видимостью меню через CSS
  mainNavigation.classList.toggle('main-nav--closed');
  mainNavigation.classList.toggle('main-nav--opened');
};

/**
 * Инициализирует функциональность выпадающего меню.
 * Добавляет обработчик события клика на кнопку переключения меню.
 * @function
 * @returns {void}
 */
const initializeDropdown = () => {
  // Добавляем обработчик события 'click' на кнопку меню
  // При клике будет вызываться функция setDropdownState
  mainNavigationToggle.addEventListener('click', setDropdownState);
};

export { initializeDropdown };
