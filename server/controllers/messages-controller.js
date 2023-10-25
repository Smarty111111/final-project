const knex = require("./../db");

// Retrieve all messages
exports.messagesAll = async (req, res) => {
  // Get all messages from database
  knex
    .select("*") // select all records
    .from("messages") // from 'messages' table
    .then((userData) => {
      // Send messages extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving messages: ${err}` });
    });
};

// Create new book
exports.messageCreate = async (req, res) => {
  // Add new message to database
  knex("messages")
    .insert({
      // insert new record, a message
      messageId: req.body.id,
      text: req.body.text,
      user: req.body.user,
    })
    .then(() => {
      // Send a success message in response
      res.json({
        message: `Message ${req.body.text} by ${req.body.user} created.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error creating ${req.body.text} message: ${err}`,
      });
    });
};


// Remove all messages on the list
exports.messagesReset = async (req, res) => {
  // Remove all messages from database
  knex
    .select("*") // select all records
    .from("messages") // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: "messages list cleared." });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error resetting messages list: ${err}.` });
    });
};
