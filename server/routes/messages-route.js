// Import express
const express = require("express");

// Import books-controller
const messagesRoutes = require("./../controllers/messages-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all messages
// In server.js, messages route is specified as '/messages'
// this means that '/all' translates to '/messages/all'
router.get("/all", messagesRoutes.messagesAll);

// Add route for POST request to create new messages
// In server.js, messages route is specified as '/messages'
// this means that '/create' translates to '/messages/create'
router.post("/create", messagesRoutes.messageCreate);

// Add route for PUT request to reset messages list
// In server.js, messages route is specified as '/messages'
// this means that '/reset' translates to '/messages/reset'
router.put("/reset", messagesRoutes.messagesReset);

// Export router
module.exports = router;
