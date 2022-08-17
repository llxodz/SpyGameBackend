const Category = require('./models/category')
const Location = require('./models/location')

var closedTerritory = new Category(2, "Закрытые территории",
  [
    new Location("Космодром"),
    new Location("Катакомбы"),
    new Location("Радиационная зона"),
    new Location("Катакомбы"),
    new Location("Испытательный полигон"),
    new Location("Стрельбище"),
    new Location("Полигон"),
    new Location("Электростанция"),
    new Location("Телестудия"),
    new Location("Заповедник"),
    new Location("Киностудия"),
    new Location("Воиская часть"),
    new Location("Полярная станция"),
    new Location("Зона 51"),
    new Location("Фукусима"),
    new Location("Библиотека Ватикана"),
    new Location("Тюрьма"),
    new Location("Шахта"),
    new Location("Хранилище золотых запасов США"),
    new Location("База ВВС")
  ]
)

module.exports = closedTerritory
