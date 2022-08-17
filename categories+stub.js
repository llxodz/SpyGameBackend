const countries = require('./categories/countries')
const inHome = require('./categories/inHome')
const closedTerritory = require('./categories/closedTerritory')
const publicTerritory = require('./categories/publicTerritory')
const geography = require('./categories/geography')
const transport = require('./categories/transport')
const leisure = require('./categories/leisure')
const sport = require('./categories/sport')


function categoriesStub() {
  return [countries, inHome, closedTerritory, publicTerritory,
          geography, transport, leisure, sport]
}

exports.categoriesStub = categoriesStub
