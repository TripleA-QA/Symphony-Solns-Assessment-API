describe('API Testing with Cypress', () => {


  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  let totalPosts;


  it('GET - read', () => {
    cy.request('GET', apiUrl)
    .then((response) => {
      expect(response.status).to.eq(200); // Check if the request was successful
      totalPosts = response.body.length; // Store the total number of posts in a variable
      cy.log(`Total number of posts: ${totalPosts}`); // Log the total number of posts
    });
  });
  it('Use the total number of posts', () => {
    cy.log(`Using the total number of posts: ${totalPosts}`);
    // You can use the totalPosts variable here for future reference
    // Example: Assert that the totalPosts is greater than 0
    expect(totalPosts).to.be.greaterThan(0);
  });

});