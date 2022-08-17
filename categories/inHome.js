const Category = require('./models/category')
const Location = require('./models/location')

var inHome = new Category(1, "В доме",
  [
    new Location("Гардеробная"),
    new Location("Гараж"),
    new Location("Туалет"),
    new Location("Гостинная"),
    new Location("Кладовка"),
    new Location("Чердак"),
    new Location("Балкон"),
    new Location("Задний двор"),
    new Location("Кухня"),
    new Location("Подвал"),
    new Location("Прихожая"),
    new Location("Ванная"),
    new Location("Пол"),
    new Location("Диван"),
    new Location("Подушка"),
    new Location("Стол"),
    new Location("Кабинет"),
    new Location("Душевая кабина"),
    new Location("Детская комната"),
    new Location("Ступеньки"),
    new Location("Спальня"),
    new Location("Кровать")
  ]
)

module.exports = inHome
