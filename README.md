# Dynamic Post Explorer

A lightweight, responsive web application that retrieves and displays blog posts dynamically from the JSONPlaceholder API without page reloads.

## Features
- **Asynchronous Data Fetching**: Uses `async/await` and `fetch()` to load data seamlessly in the background.
- **Safe DOM Manipulation**: Uses `textContent` and dynamic element creation to prevent XSS attacks.
- **Error Handling**: Catches network drops and HTTP status errors with user-friendly messages.
- **UI State Management**: Disables the load button during requests and shows a loading status message.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- JSONPlaceholder REST API

## How to Run
1. Open `index.html` in any modern web browser.
2. Click **Load Posts** to view the retrieved posts!