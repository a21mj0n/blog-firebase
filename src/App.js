/** @jsxRuntime classic */
/** @jsx jsx */
import './styles/App.scss';
import AppBar from './components/bars/AppBar';
import { jsx, useTheme } from '@emotion/react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';

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
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} exact></Route>
            <Route path="/about" element={<HomePage/>}></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
