const FIXED_DATE = new Date(2019, 1, 1).getTime();
const MOZFEST_BASE_URL = Cypress.env("mozfest-baseurl");

describe(`Visual regression testing for foundation.mozilla.org`, () => {
  beforeEach(function () {
    cy.clock(FIXED_DATE);
  });

  // Main pages

  it(`Foundation homepage`, function () {
    cy.visit(`/`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Participate page`, function () {
    cy.visit(`/en/participate/`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`About page`, function () {
    cy.visit(`/en/about`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Blog pages

  it(`Blog index page`, function () {
    cy.visit(`/en/blog`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Blog index filtered on tag`, function () {
    cy.visit(`/en/blog/tags/iot`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Blog index with non-existent tag`, function () {
    cy.visit(`/en/blog/tags/randomnonsensetagthatdoesntexist`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Blog index filtered on category`, function () {
    cy.visit(`/en/blog/category/mozilla-festival`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Skipping as currently there's a bug related to Cypress about
  // it not being able to visit a url that redirects
  // GitHub ticket: https://github.com/mozilla/foundation.mozilla.org/issues/4042
  it.skip(`Blog index with non-existent category`, function () {
    cy.visit(`/en/blog/category/randomnonsensecateogrythatdoesntexist`);
  });

  it(`Fixed blog post page`, function () {
    cy.visit(`/en/blog/initial-test-blog-post-with-fixed-title`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Opportunity page tests (single and multi-page)

  it(`Single-page opportunity should redirect to /intiatives`, function () {
    cy.visit(`/en/opportunity/single-page-opportunity/`);
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/en/initiatives/single-page-opportunity/`
    );
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Multi-page opportunity should redirect to /intiatives`, function () {
    cy.visit(`/en/opportunity/multi-page-opportunity/`);
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/en/initiatives/multi-page-opportunity/`
    );
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Campaign index page test

  it(`Campaign index page`, function () {
    cy.visit(`/en/campaigns`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Campaign page tests (single and multi-page)

  it(`Single-page campaign`, function () {
    cy.visit(`/en/campaigns/single-page/`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Multi-page campaign`, function () {
    cy.visit(`/en/campaigns/multi-page/`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Bannered Campaign page test

  it(`Bannered Campaign Page`, function () {
    cy.visit(`/en/campaigns/initial-test-bannered-campaign-with-fixed-title`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  // Pages specific to the "Privacy Not Included" Buyers Guide

  it(`PNI homepage`, function () {
    cy.visit(`/en/privacynotincluded`);
    cy.window().its(`bg-main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`PNI category page`, function () {
    cy.visit(`/en/privacynotincluded/categories/toys-games/`);
    cy.window().its(`bg-main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`PNI product page`, function () {
    cy.visit(`/en/privacynotincluded/products/percy-cypress/`);
    cy.window().its(`bg-main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`Styleguide page`, function () {
    cy.visit(`/en/styleguide/`);
    cy.wait(1000);
    cy.percySnapshot();
  });

  it(`YouTube Regrets page`, function () {
    cy.visit(`/en/campaigns/youtube-regrets/`);
    cy.wait(1000);
    cy.percySnapshot();
  });

  // Pages specific to MozFest

  it(`MozFest homepage`, function () {
    cy.visit(`${MOZFEST_BASE_URL}`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });

  it(`MozFest primary page`, function () {
    cy.visit(`${MOZFEST_BASE_URL}/spaces`);
    cy.window().its(`main-js:react:finished`).should(`equal`, true);
    cy.wait(500);
    cy.percySnapshot();
  });
});
