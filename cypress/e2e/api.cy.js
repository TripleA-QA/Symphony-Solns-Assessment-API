describe('Test to validate API calls', () => {


  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  let totalPosts;
  let initialTotalPosts; // Variable to store the initial total number of posts

  it('GET - read', () => {
    cy.request('GET', apiUrl)
    .then((response) => {
      expect(response.status).to.eq(200); // Validate that the request was successful
      totalPosts = response.body.length; // Store the total number of posts 
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