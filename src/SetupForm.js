import React from 'react';
import { useGlobalContext } from './context';
import { styled } from '@mui/material/styles';
import {
  InputLabel,
  Button,
  Container,
  MenuItem,
  Paper,
  Select,
  Typography,
  FormControl,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;

const CustomPaper = styled(Paper)`
  width: 90vw;
  max-width: 500px;
  margin: 4rem auto;
  background: #fff;
  border-radius: 0.25rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomForm = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const StartButton = styled(Button)`
  border-radius: 0.25rem;
  border-color: transparent;
  display: block;
  width: 100%;
  margin-top: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  background: #ffb100;
  color: #222;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #eaa900;
    color: #fff;
  }
`;

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <CustomContainer>
      <CustomPaper elevation={3}>
        <Typography
          variant="h3"
          gutterBottom
          component="h1"
          sx={{
            marginBottom: '2rem',
            textAlign: 'center',
            lineHeight: '1.5',
            textTransform: 'none',
          }}
        >
          Setup Quiz
        </Typography>
        <form>
          {/* amount */}
          <CustomForm>
            <TextField
              id="amount"
              label="Number of questions"
              variant="outlined"
              type="number"
              name="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
              sx={{ width: '100%' }}
            />
            {/* category */}
            <FormControl fullWidth sx={{ margin: '2rem' }}>
              <InputLabel id="category">Category</InputLabel>
              <Select
                name="category"
                labelId="category"
                label="category"
                value={quiz.category}
                onChange={handleChange}
              >
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="history">History</MenuItem>
                <MenuItem value="politics">Politics</MenuItem>
              </Select>
            </FormControl>
            {/* difficulty */}
            <FormControl fullWidth sx={{ margin: '2rem' }}>
              <InputLabel id="difficulty">Select Difficulty</InputLabel>
              <Select
                name="difficulty"
                labelId="difficulty"
                label="select difficulty"
                value={quiz.difficulty}
                onChange={handleChange}
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
            {error && (
              <Typography
                variant="body1"
                gutterBottom
                component="p"
                sx={{ color: 'red' }}
              >
                Can't generate questions, please try different options!
              </Typography>
            )}
            <StartButton type="submit" onClick={handleSubmit}>
              Start
            </StartButton>
          </CustomForm>
        </form>
      </CustomPaper>
    </CustomContainer>
  );
};

export default SetupForm;
