import React from 'react';
import { Container, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
      }}
    >
      <CircularProgress color="secondary" />
    </Container>
  );
};

export default Loading;
