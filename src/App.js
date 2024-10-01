// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1)
    if(userGuess > randomNumber) {
      setFeedback('Too high');
    }else if(userGuess < randomNumber) { 
      setFeedback('Too low');
    }else if(isNaN(userGuess)) {
      setFeedback('Please enter a number:');
    }
    else {
      setFeedback(`Correct! You guessed it in ${attempts + 1} attempts.`);
    };
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };


  const restartGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Guess the Number Game
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Guess a number between 1 and 100
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
        <TextField
          label="Your Guess"
          variant="filled"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        onKeyDown={handleKeyDown} 
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="secondary" onClick={handleGuess}  >
          Submit Guess
        </Button>
      </Box>

      {feedback && (
        <Typography variant="h6" align="center" color="secondary" sx={{ mt: 2 }}>
          {feedback}
        </Typography>
      )}

      {feedback.includes('Correct') && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="outlined" color="secondary" onClick={restartGame}>
            Play Again
          </Button>
        </Box>
      )}
    </Container>
  );




    
}

export default App;
