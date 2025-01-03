# Node.js Server Exercise

This project is a simple Node.js server that serves static HTML pages based on the requested URL routes. Below are the routes and their corresponding behaviors:

## Routes

### 1. **Home Page**

- **URL**: `http://localhost:8080`
- **Serves**: `index.html`
- **Description**: This is the main landing page of the application.

### 2. **About Page**

- **URL**: `http://localhost:8080/about`
- **Serves**: `about.html`
- **Description**: This page provides information about the application or its purpose.

### 3. **Contact Page**

- **URL**: `http://localhost:8080/contact-me`
- **Serves**: `contact-me.html`
- **Description**: This page allows users to contact the application owner or administrator.

### 4. **404 Error Page**

- **URL**: Any URL not listed above.
- **Serves**: `404.html`
- **Description**: Displays an error page when the user navigates to a route that doesn't exist.

## How to Run the Server

1. Clone this repository to your local machine.
2. Make sure you have [Node.js](https://nodejs.org/) installed on your system.
3. Navigate to the project directory in your terminal.
4. Run the following command to start the server:

   ```bash
   node server.js
   ```
