# Book-App RESTful API

This is a simple RESTful API for managing books. It allows users to perform CRUD operations on books (Add, Read, Update, Delete) and is built using Node.js and MongoDB.

## API Endpoints

- **Add a new book**
  - URL: POST /api/books
  - Request Body:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary"
    }
    ```
  - Response: 201 Created
    ```json
    {
      "_id": "book_id",
        "title": "Book Title",
        "author": "Author Name",
        "summary": "Book Summary"
    }
    ```

- **View a list of all books**
  - URL: GET /api/books
  - Response: 200 OK
    ```json
    [
      {
        "_id": "book_id",
        "title": "Book Title",
        "author": "Author Name",
        "summary": "Book Summary"
      },
      // Other books
    ]
    ```

- **View details of a specific book by its ID**
  - URL: GET /api/books/:id
  - Response: 200 OK
    ```json
    {
      "_id": "book_id",
      "title": "Book Title",
      "author": "Author Name",
      "summary": "Book Summary"
    }
    ```

- **Update a book's details**
  - URL: PUT /api/books/:id
  - Request Body:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "summary": "Updated Book Summary"
    }
    ```
  - Response: 200 OK
    ```json
    {
      "_id": "book_id",
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "summary": "Updated Book Summary"
    }
    ```

- **Delete a book**
  - URL: DELETE /api/books/:id
  - Response: 200 OK
    {
    "message": "Book deleted successfully."
    }
    
## Instructions to Set Up and Run Locally

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Akshay-Anilkumar/books-app.git

2. Install the required dependencies:

   npm install
   
3. Set up a MongoDB database (either locally or using a cloud solution) and update the MongoDB URI in the code with your database connection.
   
4. Start the application:

   npm run dev

5. The API will be accessible at http://localhost:3000 by default. You can use tools like Postman to test the API endpoints locally.
   
