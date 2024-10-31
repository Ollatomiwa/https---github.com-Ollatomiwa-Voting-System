const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let poll = {
  id: 1,
  question: "What's your favorite programming language?",
  options: [
    { id: 1, choice: 'JavaScript', count: 0 },
    { id: 2, choice: 'Python', count: 0 },
    { id: 3, choice: 'TypeScript', count: 0 },
  ],
};

// Get Poll
app.get('/poll', (req, res) => {
  res.json(poll);
});

// Vote
app.post('/vote', (req, res) => {
  const { optionId } = req.body;
  const option = poll.options.find((opt) => opt.id === optionId);
  if (option) {
    option.count += 1;
    res.json({ message: 'Vote counted', poll });
  } else {
    res.status(404).json({ message: 'Option not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
