
import './commands'
var os = require('os');


before(function () {
  cy.fixture('credentials').then(function (data) {
    this.data = data
  })
  cy.log('Test Suit Started')
  cy.viewport(1200, 800)
})
afterEach(function () {
  cy.log('Tear Down: Test done')
  cy.clearCookies({ domain: null })
  cy.clearLocalStorage({ log: true }) 
})



