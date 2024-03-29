**# Haze API with Node.js**

**##To initiate pnpm type:** `npm i`

**##To start the server type:** `pnpm watch`

**## Overview**

This Node.js project showcasing my API implementing a login system and a business card creation feature. It covers:

- **API Interactions:**

  - Handling API requests
  - Managing API responses
  - Handling potential errors

- **Login System:**
  - User registration
  - User authentication
  - Secure password storage
- **Business Card Creation:**
  - Validating user input
  - Submitting data to the API
  - Storing card information in database
  - Displaying created business cards

**## Technologies Used**

- Node.js
- Express
- morgan
- mongoose
- JWT
- cors
- bcrypt
- calk

**## API Endpoints**

- **Login:** `POST /api/v1/users/login`
- **Register:** `POST /api/v1/users`
- **User details:** `GET /api/v1/users/:id`
- **All users (Admin Only):** `GET /api/v1/users`
- **Edit user (account owner only):** `PUT /api/v1/users/:id`
- **Change business account status(account owner only):** `PATCH /api/v1/users/:id`
- **Delete user (Admin or account owner only):** `DELETE /api/v1/users/:id`
- **Get all business games:** `GET /api/v1/games`
- **Create business card(Business status or Admin account only):** `POST /api/v1/games`
- **Get all games created by user (card owner only):** `GET /api/v1/games/my-games`
- **Get card by card ID:** `GET /api/v1/games/:id`
- **Edit card(Admin or account owner only):** `PUT /api/v1/games/:id`
- **Like a card:** `PATCH /api/v1/games/:id`
- **Delete a card(Admin or account owner only):** `DELETE /api/v1/games/:id`

**##Admin credentials**

- **login: admin@admin.com**
- **password: 123456aA!**

**## Usage**

1. Register a new user or log in with existing credentials.
2. Access the business game page creation form.
3. Fill in the required game settings.
4. Submit the form to create a new game page.
5. View created game pages.

**.rest file was used for testing api interactions, and can be used for further reference and help.**
