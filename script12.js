  // CRUD Operations
  // C > Create , POST
  // R > Read , Get
  // U > Update, PUT, PATCH
  // D > Delete , Delete 
// We will use:
// https://jsonplaceholder.typicode.com/posts
// This API simulates real backend behavior.
// 1. READ (GET all posts)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("All Posts:", data);
  })
  .catch(error => console.error("Error:", error));


//  2. READ (GET single post)

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Single Post:", data);
  })
  .catch(error => console.error("Error:", error));

  // 3. CREATE (POST new data)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello Fetch API",
    body: "This is a new post",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Created Post:", data);
  })
  .catch(error => console.error("Error:", error));

  // 4. UPDATE (PUT full update)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated content",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Updated Post:", data);
  })
  .catch(error => console.error("Error:", error));


  // 5. PARTIAL UPDATE (PATCH)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Partially Updated Title"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Patched Post:", data);
  })
  .catch(error => console.error("Error:", error));
 
 // 6. DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    console.log("Deleted Status:", response.status);
  })
  .catch(error => console.error("Error:", error));

