const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock data for demonstration purposes
const questions = [
  { id: 1, name: 'John', question: 'How to deal with anxiety?' },
  { id: 2, name: 'Jane', question: 'What are some stress management techniques?' },
  { id: 3, name: 'Mike', question: 'How to overcome depression?' }
];

// API endpoint to get the questions
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
