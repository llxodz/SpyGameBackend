const Category = require('./models/category')
const Location = require('./models/location')

var transport = new Category(5, "Транспорт",
  [
    new Location("Океанский лайнер"),
    new Location("Самолет"),
    new Location("Автобус"),
    new Location("Пассажирский поезд"),
    new Location("Вертолет"),
    new Location("Подводная лодка"),
    new Location("Метро"),
    new Location("Яхта"),
    new Location("Трамвай"),
    new Location("Трактор"),
    new Location("Паром"),
    new Location("Мусоровоз"),
    new Location("Катамаран"),
    new Location("Байдарка"),
    new Location("Сап-доска")
  ]
)

module.exports = transport
