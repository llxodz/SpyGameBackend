const Category = require('./models/category')
const Location = require('./models/location')

var sport = new Category(7, "Спорт",
  [
    new Location("Футбольное поле"),
    new Location("Хоккейная арена"),
    new Location("Бассейн"),
    new Location("Стадион"),
    new Location("Теннисный корт"),
    new Location("Поле для гольфа"),
    new Location("Спортзал"),
    new Location("Мототрасса"),
    new Location("Бильярд"),
    new Location("Ринг"),
    new Location("Лыжная база"),
  ]
)

module.exports = sport
