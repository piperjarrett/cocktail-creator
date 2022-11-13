describe("dahsboard error handeling spec", () => {
  it("should show a spiiner on the homepage if the cocktails weren't set", () => {
    cy.intercept(
      { url: "https://cocktail-api-flax.vercel.app/api/vi/cocktails" },
      { forceNetworkRequest: true }
    );
    cy.visit("http://localhost:3000/");
    cy.get('div[class="loading-spinner"]').should("have.css", "animation");
  });
  it("should show an error message on the homepage if there is an error", () => {
    cy.intercept(
      { url: "https://cocktail-api-flax.vercel.app/api/vi/cocktails" },
      { statusCode: 500 }
    );
    cy.visit("http://localhost:3000/");
    cy.get('h1[class="error"]').contains(
      "Sorry, something went wrong. Try again later!"
    );
  });
});

describe("drink info error handeling spec", () => {
  it("should show a loading symbol if one cocktail is being fetched", () => {
    cy.intercept(
      { url: "https://cocktail-api-flax.vercel.app/api/vi/cocktails/Gimlet" },
      { forceNetworkRequest: true }
    );
    cy.visit("http://localhost:3000/cocktails/Gimlet");
    cy.get('div[class="loading-spinner"]').should("have.css", "animation");
  });
  it("should show an error message on the info page if there is an error", () => {
    cy.intercept(
      { url: "https://cocktail-api-flax.vercel.app/api/vi/cocktails/Gimlet" },
      { statusCode: 404 }
    );
    cy.visit("http://localhost:3000/cocktails/Gimlet");

    cy.get('h1[class="error"]')
      .contains("Uh Oh, something went wrong.")
      .get('p[class="error"]')
      .contains("Please try again Later!");
  });
});

describe("dahsboard error handeling spec", () => {
  it("should show an error message if there was an issue rating the drink", () => {
    cy.intercept(
      { url: "https://cocktail-api-flax.vercel.app/api/vi/cocktails/Gimlet" },
      { statusCode: 204 }
    );
    cy.visit("http://localhost:3000/cocktails/Gimlet");
    cy.get('h1[class="error"]')
      .contains("Uh Oh, something went wrong.")
      .get('p[class="error"]')
      .contains("Please try again Later!");
  });
});
