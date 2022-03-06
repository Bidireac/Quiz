import React from 'react';
import { useGlobalContext } from './context';
import { Button, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import SetupForm from './SetupForm';
import Loading from './Loading';
import CustomModal from './CustomModal';
import { Box } from '@mui/system';

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;

const CustomPaper = styled(Paper)`
  width: 90vw;
  max-width: 1170px;
  margin: 4rem auto;
  background: #fff;
  border-radius: 0.25rem;
  padding: 3rem;
`;

const CorrectAnswers = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: right;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  color: hsl(125, 67%, 44%);
`;

const AnswerButton = styled(Button)`
  display: block;
  width: 100%;
  max-width: 60%;
  margin: 0.75rem auto;
  background: hsl(205, 90%, 76%);
  border-radius: 0.25rem;
  border-color: transparent;
  color: #222;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: all 0.3s linear;
`;

const NextQuestion = styled(Button)`
  border-radius: 0.25rem;
  border-color: transparent;
  padding: 0.25rem 0.5rem;
  display: block;
  width: 35%;
  margin-left: auto;
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

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <CustomContainer>
      <CustomModal />
      <CustomPaper elevation={3}>
        <CorrectAnswers variant="subtitle1" gutterBottom component="p">
          Correct Answers: {correct}/{index}
        </CorrectAnswers>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            component="h1"
            dangerouslySetInnerHTML={{ __html: question }}
            sx={{
              marginBottom: '2rem',
              textAlign: 'center',
              lineHeight: '1.5',
              textTransform: 'none',
            }}
          />
          <Box>
            {answers.map((answer, index) => {
              return (
                <AnswerButton
                  key={index}
                  onClick={() => checkAnswer(correct_answer === answer)}
                >
                  <Box dangerouslySetInnerHTML={{ __html: answer }} />
                </AnswerButton>
              );
            })}
          </Box>
        </Box>
        <NextQuestion onClick={nextQuestion}>Next Question</NextQuestion>
      </CustomPaper>
    </CustomContainer>
  );
}

export default App;
