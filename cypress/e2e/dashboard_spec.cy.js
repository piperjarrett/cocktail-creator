import cocktails from "../fixtures/cocktailsdata.json";

describe("dashboard spec", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/vi/cocktails", {
      cocktails,
    }).as("cocktails");
    cy.visit("http://localhost:3000/");
  });
  it("should render a logo that links to the homepage", () => {
    cy.get('img[class="logo"]').click();
    cy.url().should("include", "/");
  });
  it("should render a header", () => {
    cy.get("h2").contains("Find Your Perfect Drink");
  });
  it("should render a form", () => {
    cy.get("h3").contains("Search To Enjoy Our Cocktails");
    cy.get('input[name="Ingredient"]');
  });
  it("should render all cards and have read more button that goes to the info page", () => {
    cy.get(".cocktail-container > :nth-child(1)")
      .contains("Cosmopolitan")
      .get(".cocktail-container > :nth-child(1)")
      .contains("Absolut Citron")
      .get(".cocktail-container > :nth-child(1)")
      .contains("Cointreau")
      .get(".cocktail-container > :nth-child(1)")
      .contains("Lime Juice")
      .get(".cocktail-container > :nth-child(1)")
      .contains("Ocean Spray Cranberry")
      .get(".cocktail-container > :nth-child(1)")
      .contains("Garnish: Lemon Twist")
      .get(".cocktail-container > :nth-child(1)")
      .contains("Read More")
      .click()
      .url()
      .should("include", "http://localhost:3000/cocktails/Cosmopolitan");
  });
  it("should filter the cards when a user types in the form", () => {
    cy.get('input[name="Ingredient"]').type("lime");
    cy.get(".cocktail-container > :nth-child(2)")
      .contains("Gimlet")
      .get(".cocktail-container > :nth-child(2)")
      .contains("Gin")
      .get(".cocktail-container > :nth-child(2)")
      .contains("Lime")
      .get(".cocktail-container > :nth-child(2)")
      .contains("Simple Syrup")
      .get(".cocktail-container > :nth-child(2)")
      .contains("Read More")
      .click()
      .url()
      .should("include", "http://localhost:3000/cocktails/Gimlet");
  });
});
