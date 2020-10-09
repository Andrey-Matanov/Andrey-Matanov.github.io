const goods = [{
    title: 'Футболка',
    price: 150,
    img: 'tshirt.jpg',
  },
  {
    title: 'Носки',
    price: 50,
    img: 'socks.jpg',
  },
  {
    title: 'Куртки',
    price: 350,
    img: 'jacket.jpg',
  },
  {
    title: 'Мужские туфли',
    price: 250,
    img: 'shoes.jpg',
  },
];

const renderGoodsItem = (title, price, img) => {
  return `
  <div class="goods_item">
    <img class="goods_item__img" src="../assets/${img}" alt="${img}"></img>
    <div class="goods_item__text">
      <h3 class="goods_item__title">${title}</h3>
      <p>${price}</p>
    </div>

  </div>
  `.repeat(4);
};

const renderGoodsList = (list) => {
  list.map(({
    title = 'Товар отсутствует',
    price = '0',
    img = 'tshirt.jpg'
  }) => document.querySelector('.goods_list').innerHTML += renderGoodsItem(title, price, img));
  console.log(document.querySelector('.goods_list').innerHTML);
}

renderGoodsList(goods);