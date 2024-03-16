# Chatter App

Chatter is a simple chat application built with Node.js, Express.js, MongoDB, and EJS for server-side rendering.

## Project Structure

- `app.js`: Main entry point for the application.
- `models/Message.js`: Mongoose schema for messages.
- `public/`: Static assets like CSS files.
- `routes/index.js`: Application routes for fetching and posting messages.
- `views/`: EJS templates for rendering HTML pages.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/chatter-app.git`
2. Navigate to the project directory: `cd chatter-app`
3. Install dependencies: `npm install`
4. Set up environment variables in a `.env` file with `MONGODB_URI=your_mongodb_connection_uri`
5. Start the application: `npm start`

## Usage

- Access the application at `http://localhost:3000`.
- Enter your username and message, then click "Post" to send.
- View previous messages in the chat interface.

## Technologies Used

- Node.js, Express.js: Backend environment and web framework.
- MongoDB, Mongoose: NoSQL database and object modeling.
- EJS: Templating engine for server-side rendering.
- Tailwind CSS: CSS framework for styling.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make changes and commit (`git commit -am 'Add new feature'`).
4. Push changes to the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## Acknowledgements

- Tailwind CSS for UI design.
- MongoDB and Mongoose for data storage.
- Express.js for routing and logic.
- EJS for HTML rendering.
- Node.js community for support.
