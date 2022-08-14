const Category = require('./models/category')
const Location = require('./models/location')

var countries = new Category(0, "Страны",
  [
    new Location("Россия"),
    new Location("Китай"),
    new Location("Грузия"),
    new Location("Индия"),
    new Location("США"),
    new Location("Финлядия"),
    new Location("Италия"),
    new Location("Австралия"),
    new Location("Египет"),
    new Location("Украина"),
    new Location("Франция"),
    new Location("Бразилия"),
    new Location("Таиланд"),
    new Location("Израиль"),
    new Location("Турция"),
    new Location("Мексика"),
    new Location("Англия"),
    new Location("Япония"),
    new Location("Швеция")
  ]
)

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

function categoriesStub() {
  var value = []
  value.push(countries)
  value.push(inHome)
  value.push(closedTerritory)
  return value
}

exports.categoriesStub = categoriesStub
