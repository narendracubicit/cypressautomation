class mainscreen {

  // following Page Object Model

  getSearchQueryInputTextBox() {
    return cy.get('input#search-input')
  }
  getSubmitButton() {
      return cy.get('#search-button') 
    }
  getEmptyQueryErrorMessage() {
    return cy.get("div#error-empty-query") 
  }
  getSearchResultsList() {
     return cy.get("ul#search-results>li") 
    }
  getNoResultsErrorMessage(){
     return cy.get("div#error-no-results") 
  }

  // actions that can be performed on the page
  enterTextInSearchInputTextBox(text){
    this.getSearchQueryInputTextBox().type(text);
  }

  clickSearchSubmitButton() {
    this.getSubmitButton().click();
    // waiting for search response
    cy.wait(100);
  }

}
export default mainscreen
