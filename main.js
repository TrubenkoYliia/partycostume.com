
document.addEventListener('DOMContentLoaded', function () {
  const dresses = [
    { name: "Milana", image: "ball/milana.jpg", article: "005", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
    { name: "Dina", image: "ball/dina.jpg", article: "006", price: "250 грн", description: "Легка і стильна сукня для святкової події"  },
    { name: "Susanna", image: "img/ball/susanna.jpg", article: "007", price: "250 грн" },
    { name: "Kriss", image: "img/ball/kriss.jpg", article: "008", price: "250 грн" },
    { name: "Zannin", image: "img/ball/zanni.jpg", article: "009", price: "250 грн" },
    { name: "Nicol", image: "img/ball/nicol.jpg", article: "010", price: "250 грн" },
    { name: "Marie", image: "img/ball/marie.jpg", article: "011", price: "250 грн" }
  ];
  const animals = [
    { name: "Білочка", image: "img/animals/білка.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
    { name: "Лисичка", image: "img/animals/лисичка.jpg", article: "013", price: "250 грн" },
    { name: "Метелик", image: "img/animals/метелик.jpg", article: "014", price: "250 грн" },
    { name: "Мишка", image: "img/animals/мишка.jpg", article: "015", price: "250 грн" },
    { name: "Бобер", image: "img/animals/бобер.jpg", article: "016", price: "250 грн" },
  ];
  const fairytale = [
    { name: "Білосніжка", image: "img/farytale/білосніжка.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
    { name: "Червона шапочка", image: "img/farytale/червонашапочка.jpg", article: "013", price: "250 грн" },
    { name: "Мушкетер", image: "img/farytale/мушкетер.jpg", article: "014", price: "250 грн" },
    { name: "Пірат", image: "img/farytale/пірат.jpg", article: "015", price: "250 грн" },
    { name: "Снігова королева", image: "img/farytale/снігова королева.jpg", article: "016", price: "250 грн" },
  ];
  const time = [
    { name: "Літо", image: "img/time/літо.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
    { name: "Осінь", image: "img/time/осінь.jpg", article: "013", price: "250 грн" },
    // { name: "Зима", image: "img/time/зима.jpg", article: "014", price: "250 грн" },
    { name: "Весна", image: "img/time/весна.jpg", article: "015", price: "250 грн" },
   
  ];
  const flowers = [
    { name: "Квітка", image: "img/flowers/квітка.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
  ];
  const mult = [
    { name: "Скай", image: "img/mult/патруль.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
  ];
  const newyear = [
    { name: "Ялинка", image: "img/newyear/ялинка.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
  ];
  const national = [
    { name: "Україночка", image: "img/national/національний.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
  ];
  const thematic = [
    { name: "Поліцейський", image: "img/thematic/поліцейський.jpg", article: "012", price: "250 грн", description: "Легка і стильна сукня для святкової події" },
  ];

  const products = {
    dresses,
    animals,
    fairytale,
    time,
    flowers,
    mult,
    newyear,
    national,
    thematic
  };

  const titleKey = document.title.toLowerCase().trim();
  const selectedProducts = products[titleKey];
  if (!selectedProducts) return;

  const container = document.getElementById('product-container');
  const catalogCard = document.createElement('div');
  catalogCard.className = 'hero__catalog-card';
  const list = document.createElement('ul');
  list.className = 'hero__catalog-list';

  selectedProducts.forEach(product => {
    const item = document.createElement('li');
    item.className = 'hero__catalog-item';

    const article = document.createElement('article');
    article.className = 'product-card';

    const content = document.createElement('div');
    content.className = 'product-card__content';

    const imgLink = document.createElement('a');
    imgLink.href = '#';
    const img = document.createElement('img');
    img.className = 'product-card__img';
    img.src = product.image;
    img.alt = `Сукня ${product.name}`;
    img.height = 525;
    imgLink.appendChild(img);

    const name = document.createElement('h3');
    name.className = 'product-card__names';
    const nameLink = document.createElement('a');
    nameLink.href = '#';
    nameLink.textContent = `Сукня "${product.name}"`;
    name.appendChild(nameLink);

    const articul = document.createElement('span');
    articul.className = 'product-card__articul';
    articul.textContent = product.article;

    const price = document.createElement('span');
    price.className = 'product-card__price';
    price.textContent = product.price;

    content.append(imgLink, name, articul, price);
    article.appendChild(content);
    item.appendChild(article);

    if (product.price) {
      const modal = document.createElement('div');
      modal.className = 'product-card__modal product-card--close';
      modal.innerHTML = `
        <button class="product-card__close"><img src="img/close_1.svg" alt="close"></button>
        <div class="product-card__inner">
          <div class="product-card__img"><img src="${product.image}" height="525px" alt=""></div>
          <div class="product-card__info">
            <h2 class="product-card__info-h2">Сукня "${product.name}"</h2>
            <p class="product-card__info-p">Артикул: ${product.article}</p>
            <div class="product-card__info-description">
              <p class="product-card__info-p">${product.description}</p>
            </div>
            <p>Ціна прокату: ${product.price}</p>
            <button class="order-btn"><a class="order-btn-link" href="#">Замовити</a></button>
          </div>
        </div>
      `;
      item.appendChild(modal);
    }

    list.appendChild(item);
  });

  catalogCard.appendChild(list);
  container.appendChild(catalogCard);

  // Поведінка модальних вікон
  document.querySelectorAll('.hero__catalog-item').forEach(item => {
    const modal = item.querySelector('.product-card__modal');
    const card = item.querySelector('.product-card');

    card.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.closest('.product-card__modal') || e.target.closest('.product-card__close')) return;
      modal.classList.remove('product-card--close');
      modal.style.display = 'block';
      modal.style.opacity = '0';
      setTimeout(() => modal.style.opacity = '1', 10);
    });

    const closeBtn = modal.querySelector('.product-card__close');
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.add('product-card--close');
      }, 200);
    });

    modal.addEventListener('click', function (e) {
      if (!e.target.closest('.product-card__inner') && !e.target.closest('.product-card__close')) {
        modal.style.opacity = '0';
        setTimeout(() => {
          modal.style.display = 'none';
          modal.classList.add('product-card--close');
        }, 200);
      }
    });
  });
  document.querySelectorAll('.hero__catalog-item').forEach(item => {
    const orderBtn = item.querySelector('.order-btn');
    const orderModal = item.querySelector('.modal-window');
  
    if (!orderBtn || !orderModal) return;
  
    orderBtn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation(); // зупиняємо сплив, щоб не закрилось одразу
      orderModal.classList.remove('modal-hidden');
    });
  
    // Закриття по кліку в будь-яке місце
    document.addEventListener('click', function(event) {
      if (!orderModal.classList.contains('modal-hidden')) {
        // якщо натиснули не всередині модального вікна
        if (!event.target.closest('.modal-window')) {
          orderModal.classList.add('modal-hidden');
        }
      }
    });
  
    // Блокування "пробою" всередині самого модального вікна
    orderModal.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  // Створюємо друге модальне вікно один раз
const secondModal = document.createElement('div');
secondModal.id = 'order-modal';
secondModal.className = 'order-modal modal-hidden';
secondModal.innerHTML = `
  <div class="order-modal-content">
    <button class="order-modal-close"><img src="img/close_1.svg" alt="close"></button>
    <p>Замовити можна за номером:<br><strong>+38 (067) 540-87-10</strong></p>
  </div>
`;
document.body.appendChild(secondModal);

// Додаємо обробник для відкриття другого модального вікна
document.addEventListener('click', function (e) {
  const orderBtn = e.target.closest('.order-btn, .order-btn-link');
  if (orderBtn) {
    e.preventDefault();
    secondModal.classList.remove('modal-hidden');
    secondModal.style.display = 'flex';
    secondModal.style.opacity = '0';
    setTimeout(() => secondModal.style.opacity = '1', 10);
  }
});

// Закриття другого модального вікна по кнопці
secondModal.querySelector('.order-modal-close').addEventListener('click', () => {
  secondModal.style.opacity = '0';
  setTimeout(() => {
    secondModal.style.display = 'none';
    secondModal.classList.add('modal-hidden');
  }, 200);
});

// Закриття по кліку за межами
secondModal.addEventListener('click', function (e) {
  if (!e.target.closest('.order-modal-content')) {
    secondModal.style.opacity = '0';
    setTimeout(() => {
      secondModal.style.display = 'none';
      secondModal.classList.add('modal-hidden');
    }, 200);
  }
});
});



