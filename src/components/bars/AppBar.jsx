/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppBar = ({ isAuth, isDark, setIsDark }) => {
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
          <Col className="d-flex align-items-center">
            <Link
              className="text-decoration-none"
              css={{ fontWeight: 'bold', fontSize: 24, color: theme.primary }}
              to="/auth"
            >
              Blog
            </Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <button className="btn btn-light me-2" onClick={() => changeTheme(isDark)}>Switch</button>
            {!isAuth && <Link className="btn btn-light" to="/auth">Sign In</Link>}
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default AppBar;