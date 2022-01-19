/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Container, Row, Col } from 'react-bootstrap';

const AppBar = ({ isDark, setIsDark }) => {
  const theme = useTheme();

  const navStyle = {
    backgroundColor: theme.secondary,
    color: theme.primary,
    padding: '.5rem 0',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const changeTheme = (isDark) => {
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    setIsDark(!isDark);
  };

  return (
    <nav css={navStyle}>
      <Container>
        <Row>
          <Col>
            Blog
          </Col>
          <Col className="d-flex justify-content-end">
            <button onClick={() => changeTheme(isDark)}>Switch</button>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default AppBar;