import React from 'react';
import { useGlobalContext } from './context.js';
import Modal from '@mui/material/Modal';
import { Button, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const CustomModal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  return (
    <Modal open={isModalOpen}>
      <Box sx={style}>
        <Typography variant="h3" component="h1" gutterBottom>
          Congrats!
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#ffb100', color: '#222', margin: 3 }}
          onClick={closeModal}
        >
          Play Again
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
