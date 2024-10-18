# EJS Blog Post Generator 📄
 Project contents for the Blog Post Generator constructed in EJS.

 ## Objective 🎯
 Create a simple blog application using EJS (Embedded JavaScript) templating with Express.js.
 This activity will help you understand how to use EJS to generate dynamic HTML Content.

 ## Key Learning Points 🏫
 - Setting up an Express.JS server with EJS
 - Creating an using EJS templates
 - Implementing partials for reusable components
 - Passing Data from the server to EJS templates
 - Using EJS syntax for dynamic content rendering.


 # Project Structure 🌲
 ejs-blog-generator/ <br>
 ├── views/ <br>
 │ ├── partials/ <br>
 │ │ ├── header.ejs <br>
 │ │ └── footer.ejs <br>
 │ ├── home.ejs <br>
 │ └── post.ejs <br>
 ├── public/ <br>
 │ └── styles.css <br>
 └── app.js <br>

 # Tasks Breakdown ⛓️‍💥
 1. Design **[TODO]**
    - Create a list of Functional and Non-Functional requirements for this project
    - Create at least 2 UML Diagrams to explain how the system will work
 2. Server Setup **[DONE]**
    - Create an Experess.JS server
    - Configure EJS as the View Engine
 3. Create Partials **[DONE]**
    - Develop header and footer partials for consistent layout
 4. Home Page Template **[DONE]**
    - Create a Template to display a list of blog posts
 5. Individual post template **[DONE]**
    - Design a template to show the full blog post content
 6. Routing **[DONE]**
    - Implement Routes for the home page and individual posts
    - Pass the data to the templates
 7. Styling **[DONE]**
    - Add basic CSS to improve the appearance of your blog
 8. Testing **[DONE]**
    - Run the Server and verify functionality in the Browser
 9. Documentation **[TODO]**
    - Write Documentation for each step taken, making sure to reference back to the requirements gathered in Design.
    - Your documentation should feature a section on testing, in this section, you should justify the kind of testing you are doing (exhaustive, pseudo-exhaustive, etc...), and show proof of testing the application through testing tables
    - JSDoc Commenting is expected throughout the code as part of the Documentation

  ## Key EJS Concepts to be used 💭
  | Type of Concept | Reason                                                |
  | :---------------| :---------------------------------------------------- |
  | <% %>           | For JavaScript Logic (Loops, COnditionals)            |
  | <%= %>          | For Outputting Escaped HTML                           |
  | <%- %>          | For Outputting Unescaped HTML Routes to EJS templates |

*Passing variable from Express routes to EJS Templates*

## Expected Outcome 🌟
A functioning blog with home page listing all posts and individual pages for each post using reusable EJS components and styled with CSS

### Extension Ideas ➡️
- Add a Form to create new blog posts **[DONE]**
- Implement a Tagging System **[DONE]**
- Create a search functionality **[TODO]**