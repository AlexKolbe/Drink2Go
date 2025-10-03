/**
 * Модуль для работы с диапазоном цен (ползунок).
 * Использует библиотеку noUiSlider для создания слайдера цен.
 * Синхронизирует значения слайдера с полями ввода.
 * @module price-range
 */

// Конфигурация слайдера цен
const PRICE_CONFIG = {
  MIN: 0, // Минимальное значение слайдера
  MAX: 980, // Максимальное значение слайдера
  STEP: 1, // Шаг изменения значений
  START: [0, 900] // Начальные позиции ползунков [min, max]
};

// Элементы DOM
const slider = document.querySelector('.form__slider'); // Контейнер слайдера
const minInput = document.querySelector('.form__slider-min'); // Поле ввода минимальной цены
const maxInput = document.querySelector('.form__slider-max'); // Поле ввода максимальной цены

/**
 * Создает экземпляр слайдера noUiSlider с заданной конфигурацией.
 * Настраивает внешний вид и поведение слайдера.
 * @function
 * @returns {void}
 */
const createSlider = () => {
  // Инициализация слайдера noUiSlider
  noUiSlider.create(slider, {
    range: {
      min: PRICE_CONFIG.MIN, // Минимальное значение диапазона
      max: PRICE_CONFIG.MAX // Максимальное значение диапазона
    },
    step: PRICE_CONFIG.STEP, // Шаг изменения
    start: PRICE_CONFIG.START, // Начальные позиции ползунков
    connect: true, // Заливка между ползунками
    cssPrefix: 'noUi-', // Префикс CSS классов
    cssClasses: {
      // Кастомные CSS классы для стилизации слайдера
      target: 'target',
      base: 'base',
      origin: 'origin',
      handle: 'handle no-ui-slider__handle', // Класс для ползунков
      handleLower: 'handleLower',
      handleUpper: 'handleUpper',
      touchArea: 'touch-area no-ui-slider__touch-area', // Область касания
      horizontal: 'horizontal',
      vertical: 'vertical',
      background: 'background',
      connect: 'connect no-ui-slider__connect', // Соединительная линия
      connects: 'connects no-ui-slider__connects', // Контейнер соединительных линий
      ltr: 'ltr',
      rtl: 'rtl',
      textDirectionLtr: 'txt-dir-ltr',
      textDirectionRtl: 'txt-dir-rtl',
      draggable: 'draggable',
      drag: 'state-drag',
      tap: 'state-tap',
      active: 'active',
      tooltip: 'tooltip',
      pips: 'pips',
      pipsHorizontal: 'pips-horizontal',
      pipsVertical: 'pips-vertical',
      marker: 'marker',
      markerHorizontal: 'marker-horizontal',
      markerVertical: 'marker-vertical',
      markerNormal: 'marker-normal',
      markerLarge: 'marker-large',
      markerSub: 'marker-sub',
      value: 'value',
      valueHorizontal: 'value-horizontal',
      valueVertical: 'value-vertical',
      valueNormal: 'value-normal',
      valueLarge: 'value-large',
      valueSub: 'value-sub'
    }
  });
};

/**
 * Обновляет значения полей ввода при изменении позиции ползунков слайдера.
 * @function
 * @param {Array} values - Массив текущих значений слайдера
 * @param {number} handle - Индекс изменяемого ползунка (0 для min, 1 для max)
 * @returns {void}
 */
const updateFields = (values, handle) => {
  // Массив ссылок на поля ввода
  const fields = [minInput, maxInput];
  // Обновляем значение соответствующего поля ввода
  // Number() преобразует строку в число
  fields[handle].value = Number(values[handle]);
};

/**
 * Обновляет позицию ползунка слайдера при изменении значения в поле ввода.
 * @function
 * @param {number} index - Индекс поля ввода (0 для min, 1 для max)
 * @param {string} value - Новое значение из поля ввода
 * @returns {void}
 */
const updateSliderFromField = (index, value) => {
  // Создаем массив значений для обновления слайдера
  // null означает, что позиция не изменится
  const values = [null, null];
  // Устанавливаем новое значение для соответствующего ползунка
  values[index] = value;
  // Обновляем позиции ползунков слайдера
  slider.noUiSlider.set(values);
};

/**
 * Инициализирует обработчики событий для синхронизации слайдера и полей ввода.
 * @function
 * @returns {void}
 */
const initializeListeners = () => {
  // Обработчик события 'update' слайдера
  // Срабатывает при изменении позиции ползунков
  slider.noUiSlider.on('update', updateFields);

  // Обработчик изменения поля минимальной цены
  minInput.addEventListener('change', (event) =>
    updateSliderFromField(0, event.target.value)
  );

  // Обработчик изменения поля максимальной цены
  maxInput.addEventListener('change', (event) =>
    updateSliderFromField(1, event.target.value)
  );
};

/**
 * Основная функция инициализации модуля диапазона цен.
 * Создает слайдер и настраивает обработчики событий.
 * @function
 * @returns {void}
 */
const initializePriceRange = () => {
  createSlider(); // Создаем слайдер
  initializeListeners(); // Настраиваем обработчики событий
};

export { initializePriceRange };
