/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// Форматируем дату
const formatDate = date => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
  const formattedTime = newDate.toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric'
  });
  return `${formattedTime} ${formattedDate}`;
};

// Создаем HTML элемент новости
const renderItem = item => {
  const el = document.createElement('div');
  el.classList.add('news');
  el.innerHTML = `
    <p class="news__date">${formatDate(item.created)}</p>
    <div class="news__block">
      <div class="news__image">
        <img src="${item.image}" alt="">
      </div>
      <div class="news__body">
        <h2 class="news__header">${item.header}</h2>
        <p class="news__content">${item.content}</p>
      </div>
    </div>
  `;
  return el;
};

// Рендерим новости
const renderNews = data => {
  const feed = document.querySelector('.cinema-news__feed');
  [...feed.children].forEach(child => child.remove());
  data.news.forEach(item => {
    const el = renderItem(item);
    feed.append(el);
  });
};

// Отображаем ошибку
const showError = () => {
  const popover = document.createElement('div');
  popover.classList.add('popover');
  popover.innerHTML = `
    <div class="popover__container">
      <p class="popover__text">
        Не удалось загрузить данные. Проверьте подключение и обновите страницу
      </p>
    </div>
  `;
  document.body.append(popover);
};

// Отправляем запрос на сервер для получения данных новостей
const getNews = async () => {
  fetch('https://service-workers.onrender.com/').then(response => response.json()).then(result => {
    if (result.status !== 'ok') return;
    renderNews(result);
  }).catch(error => {
    console.log(error);
    showError();
  });
};
getNews();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map