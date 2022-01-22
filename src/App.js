/** @jsxRuntime classic */
/** @jsx jsx */
import './styles/App.scss';
import AppBar from './components/bars/AppBar';
import { jsx, useTheme } from '@emotion/react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/auth/AuthPage';
import { useState } from 'react';

function App({ isDark, setIsDark }) {
  const theme = useTheme();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') || false);

  const styles = {
    content: {
      backgroundColor: theme.background,
      minHeight: '100vh',
      height: '100%',
      color: theme.onBackground,
    },
  };

  return (
    <div css={styles.content}>
      <Router>
        <AppBar isAuth={isAuth} isDark={isDark} setIsDark={setIsDark} />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/auth" element={<AuthPage setIsAuth={setIsAuth} />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
