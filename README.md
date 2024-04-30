# Online Movie Ticket Booking App

The Online Movie Ticket Booking App is a web application built with MERN Stack that allows users to book movie and show tickets. Users can browse available movies and shows, signin & signup, select seats, and make payments to secure their tickets.

# HomePage

![Alt Text](/frontend/public/screencapture-localhost-5173-2024-04-30-14_26_03.png)

## Features

- Movie and show listings: The app displays a list of available movies and shows along with their details such as title, genre, duration, and showtimes.
- Seat selection: Users can choose their preferred seats from the seating layout displayed for each show.
- Ticket reservation: Once seats are selected, users can reserve their tickets and proceed to the payment process.
- Payment integration: The app integrates with a payment gateway to enable users to securely make payments for their ticket bookings.
- Booking confirmation: After a successful payment, users receive a booking confirmation with their ticket details.

## Technologies Used

- MongoDb: To store, retrieve, and manage data in a document-oriented, NoSQL (non-relational) database format.
- ExpressJs: To build web applications and APIs in Node.js, providing a minimal and flexible framework for server-side development.
- React: To build user interfaces for web applications, enabling the creation of interactive and dynamic UI components efficiently.
- NodeJs: To execute server-side JavaScript, facilitating the development of scalable and high-performance web applications.
- CSS: Cascading Style Sheets for styling the app.

# To run the project

## Client-side usage(PORT: 5173) <br />

$ cd frontend // go to frontend folder <br />
$ yarn # or npm i // npm install packages <br />
$ npm run dev // run it locally <br />

## Server-side usage(PORT: 5000)

Prepare your secret <br />
run the script at the first level: <br />

(You need to add a JWT_SECRET in .env to connect to MongoDB) <br />

// in the root level <br />
$ cd server <br />
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env <br />
Start <br />
$ cd server // go to server folder <br />
$ npm i // npm install packages <br />
$ npm run dev // run it locally
