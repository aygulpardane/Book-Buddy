# Block 30 - Book Buddy

## Introduction

We are working with a new client who is wanting to design an online library for the public. Another Full Stack Solutions team has already built out the API, but we need your assistance in developing the front end to ensure on-time delivery to the client. When this is complete, please submit the link to the deployed application so I can share it with the client.

Details on the API can be found 🔗 [here](#)

## Getting Started

1. Fork this repo
2. Clone your copy of the starter code
3. `cd Unit4.BookBuddy.Starter`
4. Install dependencies `npm install`
5. Run the app with `npm run dev`

## Requirements

### Tier I - Build a Frontend Application

#### All users should be able to:

- See all books in the library’s catalog
  - Filter books with a simple text matcher (no fetch call needed here)
- View details of an individual book
- Log in to an existing account
- Register a new account

#### Logged in users should be able to:

- Checkout an available book
- View their account details
  - Name
  - Email
  - Books currently checked out
    - Users should be able to return books that they previously checked out

A few files have been added to `src/components` to help you get started. Feel free to rename any of these components or add additional components if you'd like!

### Tier II - RTK, Testing & Advanced Styling (Only required for Core students)

- Manage the application's state with Redux Toolkit (RTK)
  - The React app is connected to the API using RTK Query
  - There are query and mutation endpoints for all CRUD operations on books and users
- Use Jest to test React components
- Style the application using a front end React component library such as MUI, React-Bootstrap, Ant, TailwindUI, or Tailwind UI Kit
