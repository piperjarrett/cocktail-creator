describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/vi/cocktails/Gimlet", {
      id: "5",
      name: "Gimlet",
      ingredients: ["Gin", "Lime", "Simple Syrup"],
      recipe: "2 oz Gin, 3/4 oz Lime, 3/4 oz Simple syrup",
      directions:
        "Combine all ingredients in shaker tin. Add ice to small shaker tin. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass. Garnish with lime wheel (optional) and enjoy.",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2019/05/Gimlet-005.jpg",
      rating: "0",
    });
    cy.visit("http://localhost:3000/cocktails/Gimlet");
  });
  it("should have display the drink name", () => {
    cy.get("h1").contains("Gimlet");
  });
  it("should contains drink details", () => {
    cy.get('img[class="cocktail-image"]').should(
      "have.attr",
      "src",
      "https://www.acouplecooks.com/wp-content/uploads/2019/05/Gimlet-005.jpg"
    );
    cy.get(".recipe-directions > :nth-child(1)").contains("Recipe");
    cy.get(".recipe-directions > :nth-child(1)").contains(
      "2 oz Gin, 3/4 oz Lime, 3/4 oz Simple syrup"
    );
    cy.get(".recipe-directions > :nth-child(2)").contains("Directions");
    cy.get(".recipe-directions > :nth-child(2)").contains(
      "Combine all ingredients in shaker tin. Add ice to small shaker tin. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass. Garnish with lime wheel (optional) and enjoy."
    );
  });
  it("should allow a user to rate the drink", () => {
    cy.intercept("PUT", "http://localhost:3001/api/vi/cocktails/Gimlet", {
      id: "5",
      name: "Gimlet",
      ingredients: ["Gin", "Lime", "Simple Syrup"],
      recipe: "2 oz Gin, 3/4 oz Lime, 3/4 oz Simple syrup",
      directions:
        "Combine all ingredients in shaker tin. Add ice to small shaker tin. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass. Garnish with lime wheel (optional) and enjoy.",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2019/05/Gimlet-005.jpg",
      rating: "2",
    });
    cy.intercept("GET", "http://localhost:3001/api/vi/cocktails/Gimlet", {
      id: "5",
      name: "Gimlet",
      ingredients: ["Gin", "Lime", "Simple Syrup"],
      recipe: "2 oz Gin, 3/4 oz Lime, 3/4 oz Simple syrup",
      directions:
        "Combine all ingredients in shaker tin. Add ice to small shaker tin. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass. Garnish with lime wheel (optional) and enjoy.",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2019/05/Gimlet-005.jpg",
      rating: "2",
    });
    cy.get('label[for="rating2"]').click();
    cy.get('label[for="rating1"]').should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) url("http://localhost:3000/static/media/stars.2281e399b87430473335.svg") no-repeat scroll 0% 0% / auto padding-box border-box'
    );
    cy.get('label[for="rating2"]').should(
      "have.css",
      "background",
      'rgba(0, 0, 0, 0) url("http://localhost:3000/static/media/stars.2281e399b87430473335.svg") no-repeat scroll 0% 0% / auto padding-box border-box'
    );
  });
});
