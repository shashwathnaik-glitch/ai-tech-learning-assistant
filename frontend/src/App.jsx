import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequest = async (type) => {
    if (!input.trim()) {
      alert('Please enter some text');
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, input }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setResponse(data.result);
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse(`Error: Unable to connect to server. Make sure the backend is running.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 AI Tech Learning Assistant</h1>
        <p>Get help with code, debugging, and learning roadmaps</p>
      </header>

      <main className="main">
        <div className="input-section">
          <textarea
            className="input-box"
            placeholder="Paste your code, error message, or describe what you want to learn..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={8}
          />

          <div className="button-group">
            <button 
              className="btn btn-explain"
              onClick={() => handleRequest('explain')}
              disabled={loading}
            >
              📖 Explain Code
            </button>
            <button 
              className="btn btn-debug"
              onClick={() => handleRequest('debug')}
              disabled={loading}
            >
              🐛 Debug Error
            </button>
            <button 
              className="btn btn-roadmap"
              onClick={() => handleRequest('roadmap')}
              disabled={loading}
            >
              🗺️ Generate Roadmap
            </button>
          </div>
        </div>

        <div className="response-section">
          <h2>Response:</h2>
          {loading ? (
            <div className="loading">Processing your request...</div>
          ) : (
            <div className="response-box">
              {response || 'Your AI response will appear here...'}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
