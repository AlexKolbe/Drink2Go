/**
 * Модуль для работы со слайдером героя на главной странице.
 * Управляет переключением слайдов, пагинацией и навигацией.
 * @module slider
 */

// Элементы DOM для управления слайдером
const toggleBefore = document.querySelector('.hero__page-button--before'); // Кнопка "назад"
const toggleAfter = document.querySelector('.hero__page-button--after'); // Кнопка "вперед"
const slideItems = document.querySelectorAll('.hero__item'); // Все слайды
const pageList = document.querySelectorAll('.hero__pagination-item'); // Элементы пагинации

/**
 * Находит индекс активного слайда среди всех слайдов.
 * @function
 * @param {NodeList} pages - Коллекция всех слайдов
 * @returns {number} Индекс активного слайда или -1 если не найден
 */
const getActivePageIndex = (pages) => {
  // Преобразуем NodeList в массив и находим индекс слайда с классом 'hero__item--active'
  const index = Array.from(pages).findIndex((page) =>
    page.classList.contains('hero__item--active')
  );
  return index;
};

/**
 * Активирует указанный слайд и соответствующий элемент пагинации.
 * Обновляет состояние кнопок навигации.
 * @function
 * @param {number} oldIndex - Индекс предыдущего активного слайда
 * @param {number} newIndex - Индекс нового активного слайда
 * @returns {void}
 */
const setPageActive = (oldIndex, newIndex) => {
  // Удаляем класс активности у предыдущего слайда и элемента пагинации
  slideItems[oldIndex].classList.remove('hero__item--active');
  pageList[oldIndex].classList.remove('hero__pagination-item--active');

  // Добавляем класс активности новому слайду и элементу пагинации
  slideItems[newIndex].classList.add('hero__item--active');
  pageList[newIndex].classList.add('hero__pagination-item--active');

  // Обновляем состояние кнопок навигации
  // Отключаем кнопку "назад" если на первом слайде
  toggleBefore.disabled = newIndex === 0;
  // Отключаем кнопку "вперед" если на последнем слайде
  toggleAfter.disabled = newIndex === (Array.from(slideItems).length - 1);
};

/**
 * Обработчик клика по кнопке "назад".
 * Переключает на предыдущий слайд.
 * @function
 * @returns {void}
 */
const onToggleBeforeClick = () => {
  // Получаем индекс текущего активного слайда
  const currentIndex = getActivePageIndex(slideItems);
  // Проверяем, что это не первый слайд
  if (currentIndex > 0) {
    // Активируем предыдущий слайд
    setPageActive(currentIndex, currentIndex - 1);
  }
};

/**
 * Обработчик клика по кнопке "вперед".
 * Переключает на следующий слайд.
 * @function
 * @returns {void}
 */
const onToggleAfterClick = () => {
  // Получаем индекс текущего активного слайда
  const currentIndex = getActivePageIndex(slideItems);
  // Проверяем, что это не последний слайд
  if (currentIndex >= 0 && currentIndex < slideItems.length - 1) {
    // Активируем следующий слайд
    setPageActive(currentIndex, currentIndex + 1);
  }
};

/**
 * Обработчик клика по элементам пагинации.
 * Переключает на соответствующий слайд.
 * @function
 * @param {Event} event - Событие клика
 * @returns {void}
 */
const onPaginationButtonElementClick = ({ target }) => {
  // Получаем индекс текущего активного слайда
  const currentIndex = getActivePageIndex(slideItems);
  // Находим индекс кликнутого элемента пагинации
  const newIndex = Array.from(pageList).indexOf(target);
  // Проверяем, что элемент найден и это не текущий слайд
  if (newIndex !== -1 && newIndex !== currentIndex) {
    // Активируем выбранный слайд
    setPageActive(currentIndex, newIndex);
  }
};

/**
 * Инициализирует слайдер героя.
 * Добавляет обработчики событий для кнопок навигации и пагинации.
 * @function
 * @returns {void}
 */
const initializeSlider = () => {
  // Обработчик для кнопки "назад"
  toggleBefore.addEventListener('click', onToggleBeforeClick);
  // Обработчик для кнопки "вперед"
  toggleAfter.addEventListener('click', onToggleAfterClick);
  // Обработчики для всех элементов пагинации
  pageList.forEach((button) =>
    button.addEventListener('click', onPaginationButtonElementClick)
  );
};

export { initializeSlider };
