/** @jsxRuntime classic */
/** @jsx jsx */
import './styles/App.scss';
import React from 'react';
import AppBar from './components/bars/AppBar';
import { jsx, useTheme } from '@emotion/react';
import { Container } from 'react-bootstrap';

function App({ isDark, setIsDark }) {
  const theme = useTheme();

  const styles = {
    content: {
      backgroundColor: theme.primary,
      height: '100vh',
      color: theme.secondary,
    },
  };

  return (
    <div css={styles.content}>
      <AppBar isDark={isDark} setIsDark={setIsDark} />
      <Container>
        {isDark ? 'dark-theme' : 'light-them'}
      </Container>
    </div>
  );
}

export default App;
