const Category = require('./models/category')
const Location = require('./models/location')

var geography = new Category(4, "География",
  [
    new Location("Лес"),
    new Location("Горы"),
    new Location("Пустыня"),
    new Location("Остров"),
    new Location("Ледник"),
    new Location("Сад"),
    new Location("Пляж"),
    new Location("Океан"),
    new Location("Вулкан"),
    new Location("Джунгли"),
    new Location("Дорога"),
    new Location("Река"),
    new Location("Пещера"),
    new Location("Город"),
    new Location("Деревня"),
    new Location("Причал"),
    new Location("Ручей"),
    new Location("Водопад"),
    new Location("Набережные реки"),
    new Location("Саванна"),
    new Location("Поле")
  ]
)

module.exports = geography
