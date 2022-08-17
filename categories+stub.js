const countries = require('./categories/countries')
const inHome = require('./categories/inHome')
const closedTerritory = require('./categories/closedTerritory')
const publicTerritory = require('./categories/publicTerritory')
const geography = require('./categories/geography')
const transport = require('./categories/transport')


function categoriesStub() {
  var value = []
  value.push(countries)
  value.push(inHome)
  value.push(closedTerritory)
  value.push(publicTerritory)
  value.push(geography)
  value.push(transport)
  return value
}

exports.categoriesStub = categoriesStub
