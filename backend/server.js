const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint to process requests
app.post('/process', (req, res) => {
  const { type, input } = req.body;

  // Validate input
  if (!type || !input) {
    return res.status(400).json({ error: 'Type and input are required' });
  }

  // Generate dummy responses based on type
  let response;

  switch (type) {
    case 'explain':
      response = {
        type: 'explain',
        result: `Code Explanation:\n\nThis code appears to be ${input.substring(0, 50)}...\n\nKey concepts:\n- Variables and data types\n- Control flow structures\n- Function definitions\n\nBest practices:\n- Use meaningful variable names\n- Add comments for complex logic\n- Follow consistent formatting`
      };
      break;

    case 'debug':
      response = {
        type: 'debug',
        result: `Debug Analysis:\n\nError: ${input.substring(0, 50)}...\n\nPossible causes:\n1. Syntax error in the code\n2. Undefined variable or function\n3. Type mismatch\n\nSuggested solutions:\n- Check for typos in variable names\n- Verify all imports are correct\n- Review the stack trace for the exact line\n\nNext steps:\n- Add console.log statements\n- Use debugger breakpoints\n- Check documentation`
      };
      break;

    case 'roadmap':
      response = {
        type: 'roadmap',
        result: `Learning Roadmap:\n\nBased on your input: "${input.substring(0, 50)}..."\n\nPhase 1 (Weeks 1-4):\n- Learn fundamentals\n- Practice basic syntax\n- Build small projects\n\nPhase 2 (Weeks 5-8):\n- Intermediate concepts\n- Work on real projects\n- Collaborate with others\n\nPhase 3 (Weeks 9-12):\n- Advanced topics\n- Build portfolio projects\n- Contribute to open source\n\nResources:\n- Online tutorials\n- Documentation\n- Practice platforms`
      };
      break;

    default:
      return res.status(400).json({ error: 'Invalid type. Use: explain, debug, or roadmap' });
  }

  // Simulate processing delay
  setTimeout(() => {
    res.json(response);
  }, 500);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
