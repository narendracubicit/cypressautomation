import mainscreen from "../pages/mainscreen";

describe('QA Search - Validate search form', () => {
  var mainpage = new mainscreen();

  beforeEach(function() {
    cy.visit("https://www.dummyrandomwebsite.com/"); 
  });

  it('Scenario 01: Validate the main screen of application UI - Search input textbox and submit button', () => {
    // search input and submit buttons should be visible on the main page
    mainpage.getSearchQueryInputTextBox().should('be.visible');
    mainpage.getSubmitButton().should('be.visible');
  })

  it('Scenario 02: Verify submit button funcationality with empty search value', () => {
    mainpage.enterTextInSearchInputTextBox(''); // empty value
    mainpage.clickSearchSubmitButton();
    // empty query error message should be displayed.
    mainpage.getEmptyQueryErrorMessage().should('be.visible');
    // should not be displayed with any result set
    mainpage.getSearchResultsList().should('not.be.visible');
  })

  it('Scenario 03: Verify search results when user searches for isla - atleast one island should be returned', () => {
    mainpage.enterTextInSearchInputTextBox('isla');
    mainpage.clickSearchSubmitButton();
    // search result should be visbile and at least 1 result should be displayed
    mainpage.getSearchResultsList().should('be.visible').and('be.at.least', 1);
  })

  it('Scenario 04: Verify feedback message when no search results are found', () => {
    mainpage.enterTextInSearchInputTextBox('castle');
    mainpage.clickSearchSubmitButton();
    // no results found message should be displayed.
    mainpage.getNoResultsErrorMessage.should('be.visible');
    // should not display any search results
    mainpage.getSearchResultsList().should('not.exist');
  })

  it('Scenario 05: Verify the search results for query port', () => {
    mainpage.enterTextInSearchInputTextBox('port');
    mainpage.clickSearchSubmitButton();
    // only one result should be displayed with value Port Royal
    mainpage.getSearchResultsList().should('have.length',1).and('have.text','Port Royal');
  })
})