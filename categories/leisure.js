const Category = require('./models/category')
const Location = require('./models/location')

var leisure = new Category(6, "Досуг",
  [
    new Location("Салон красоты"),
    new Location("Бар"),
    new Location("Ресторан"),
    new Location("Кафе"),
    new Location("Аквариум"),
    new Location("Спа-салон"),
    new Location("Пейнтбольный клуб"),
    new Location("Картинг"),
    new Location("Батут"),
    new Location("Боулинг"),
    new Location("Кальянная"),
    new Location("Стриптиз-бар"),
    new Location("Ночной клуб"),
    new Location("Аквапарк"),
    new Location("Корпоративная вечеринка"),
  ]
)

module.exports = leisure
