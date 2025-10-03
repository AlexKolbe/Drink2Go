/**
 * Главный файл инициализации JavaScript функциональности сайта.
 * Импортирует и запускает все модули.
 * @module main
 */

// Импорт модулей
import { initializeDropdown } from './dropdown.js'; // Модуль выпадающего меню
import { initializeSlider } from './slider.js'; // Модуль слайдера героя
import { initializePriceRange } from './price-range.js'; // Модуль диапазона цен

/**
 * Инициализирует всю JavaScript функциональность сайта.
 * Вызывает функции инициализации всех модулей.
 * @function
 * @returns {void}
 */
// Инициализация выпадающего меню навигации
initializeDropdown();

// Инициализация слайдера на главной странице
initializeSlider();

// Инициализация слайдера диапазона цен в каталоге
initializePriceRange();
