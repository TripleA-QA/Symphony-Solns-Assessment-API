describe('API Testing with Cypress', () => {


  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  let totalPosts;
  let initialTotalPosts; // Variable to store the initial total number of posts
  let newPostId;



  it('DELETE - Delete the created post', () => {
    cy.request('DELETE', `${apiUrl}/${newPostId}`).then((response) => {
      expect(response.status).to.eq(200); // Check if the request was successful
    });
  });

  it('GET - Verify the post has been deleted', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/${newPostId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404); // Verify that the post is not found
    });
  });

  it('GET - Retrieve the final total number of posts', () => {
    cy.request('GET', apiUrl).then((response) => {
      expect(response.status).to.eq(200); // Check if the request was successful
      const finalTotalPosts = response.body.length; // Store the final total number of posts
      cy.log(`Final Total Posts: ${finalTotalPosts}`);
      expect(finalTotalPosts).to.eq(initialTotalPosts); // Compare the initial and final total number of posts to ensure integrity
    });

});
});