if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// Форматируем дату
const formatDate = (date) => {
  const newDate = new Date(date);

  const formattedDate = newDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const formattedTime = newDate.toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return `${formattedTime} ${formattedDate}`;
};

// Создаем HTML элемент новости
const renderItem = (item) => {
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
const renderNews = (data) => {
  const feed = document.querySelector('.cinema-news__feed');
  [...feed.children].forEach((child) => child.remove());

  data.news.forEach((item) => {
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
  fetch('https://service-workers.onrender.com/')
    .then((response) => response.json())
    .then((result) => {
      if (result.status !== 'ok') return;
      renderNews(result);
    })
    .catch((error) => {
      console.log(error);
      showError();
    });
};

getNews();
