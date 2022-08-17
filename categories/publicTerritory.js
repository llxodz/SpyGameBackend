const Category = require('./models/category')
const Location = require('./models/location')

var publicTerritory = new Category(3, "Общественные места",
  [
    new Location("Банк"),
    new Location("Полицейский участок"),
    new Location("Пляж"),
    new Location("Магазин"),
    new Location("Больница"),
    new Location("Отель"),
    new Location("Ресторан"),
    new Location("Казино"),
    new Location("Овощебаза"),
    new Location("Театр"),
    new Location("Цирк"),
    new Location("Аптека"),
    new Location("Институт"),
    new Location("Парикмахерская"),
    new Location("Фонтан")
  ]
)

module.exports = publicTerritory
