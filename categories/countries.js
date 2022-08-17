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

module.exports = countries
