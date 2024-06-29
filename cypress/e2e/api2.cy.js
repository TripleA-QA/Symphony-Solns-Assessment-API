describe('Test to Validate POST Creation', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  let newPostId;
  
  let initialTotalPosts; // Variable to store the initial total number of posts


  it('POST - Create a new post', () => {
    cy.request('POST', apiUrl, {
      title: 'at nam consequatur ea labore ea harum',
      body: 'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut',
      userId: 3,
    }).then((response) => {
      expect(response.status).to.eq(201); // Check if the request was successful
      newPostId = response.body.id; // Store the ID of the newly created post in a variable
      cy.log(`New Post ID: ${newPostId}`); // Log the ID of the new post
      Cypress.env('newPostId', newPostId); // Store the new post ID in Cypress.env
    });
  });

  it('Use the ID of the created post', () => {
    const postId = Cypress.env('newPostId'); // Retrieve the new post ID from Cypress.env
    cy.log(`Using the new post ID: ${postId}`);
    // Example: Assert that the postId is not undefined
    cy.request('GET', `${apiUrl}/${postId}`).then((response) => {
      expect(response.status).to.eq(200); // Check if the request was successful
      expect(response.body).to.have.property('id', postId); // Verify the post ID
      expect(response.body).to.have.property('title', 'foo'); // Verify the title
      expect(response.body).to.have.property('body', 'bar'); // Verify the body
      expect(response.body).to.have.property('userId', 1); // Verify the user ID
    });

    it('PATCH - Update the created post', () => {
      cy.request('PATCH', `${apiUrl}/${newPostId}`, {
        title: 'updated foo',
      }).then((response) => {
        expect(response.status).to.eq(200); // Check if the request was successful
        expect(response.body).to.have.property('title', 'updated foo'); // Verify the updated title
      });
    });
  
    it('GET - Retrieve the updated post', () => {
      cy.request('GET', `${apiUrl}/${newPostId}`).then((response) => {
        expect(response.status).to.eq(200); // Check if the request was successful
        expect(response.body).to.have.property('id', newPostId); // Verify the post ID
        expect(response.body).to.have.property('title', 'updated foo'); // Verify the updated title
        expect(response.body).to.have.property('body', 'bar'); // Verify the body remains the same
        expect(response.body).to.have.property('userId', 1); // Verify the user ID remains the same
      });


      
  });
});
});
