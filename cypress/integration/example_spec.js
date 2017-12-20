//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Vue Draggable', function(){
  it('Trying to drag/drop by Cypress', function(){
    // https://on.cypress.io/visit
    cy.visit('http://localhost:9000')

    cy
      .get('li[order="1"]')
      .trigger('dragstart')

    cy
      .get('li[order="5"]')
      .trigger('drop')

    cy
      .get('li[order="1"]')
      .trigger('mousedown', {which: 1})
      .trigger('mousemove', { clientX: 150, clientY: 500 }) // change it to anywhere
      .trigger('mouseup', {force: true})
  })
})
