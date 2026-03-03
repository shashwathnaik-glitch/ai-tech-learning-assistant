# AI Tech Learning Assistant - Demo

A simple full-stack demo application for an AI-powered learning assistant.

## Project Structure

```
.
├── backend/          # Node.js + Express server
│   ├── server.js     # Main server file
│   └── package.json  # Backend dependencies
│
├── frontend/         # React application
│   ├── src/
│   │   ├── App.jsx   # Main component
│   │   ├── App.css   # Styles
│   │   ├── main.jsx  # Entry point
│   │   └── index.css # Global styles
│   ├── index.html    # HTML template
│   ├── vite.config.js
│   └── package.json  # Frontend dependencies
│
└── README.md         # This file
```

## Features

- **Explain Code**: Get explanations for code snippets
- **Debug Error**: Analyze error messages and get solutions
- **Generate Roadmap**: Create learning paths for technologies

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:3000`

## Usage

1. Make sure both backend and frontend servers are running
2. Open your browser to `http://localhost:3000`
3. Enter your code, error message, or learning goal in the text box
4. Click one of the three buttons:
   - **Explain Code**: For code explanations
   - **Debug Error**: For debugging help
   - **Generate Roadmap**: For learning paths
5. View the AI response in the response section

## API Endpoint

### POST /process

Request body:
```json
{
  "type": "explain" | "debug" | "roadmap",
  "input": "your text here"
}
```

Response:
```json
{
  "type": "explain",
  "result": "AI generated response..."
}
```

## Technologies Used

**Frontend:**
- React 18
- Vite
- CSS3

**Backend:**
- Node.js
- Express.js
- CORS

## Notes

- This is a demo with dummy responses
- No authentication or database required
- Responses are simulated (not real AI)
- Perfect for hackathon prototyping

## Next Steps

To make this production-ready:
1. Integrate real AI API (OpenAI, Claude, etc.)
2. Add user authentication
3. Implement database for saving history
4. Add error handling and validation
5. Deploy to cloud platform
