/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const AppBar = ({ isAuth, isDark, setIsDark }) => {
  const theme = useTheme();

  const navStyle = {
    backgroundColor: theme.surface,
    color: theme.onSruface,
    padding: '.5rem 0',
  };

  const changeTheme = (isDark) => {
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    setIsDark(!isDark);
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem('isAuth');
    window.location.pathname = '/auth';
  };

  return (
    <nav css={navStyle}>
      <Container>
        <Row>
          <Col className="d-flex align-items-center">
            <Link
              className="text-decoration-none"
              css={{ fontWeight: 'bold', fontSize: 24, color: theme.primary }}
              to="/"
            >
              NEWS
            </Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <button className="btn btn-light d-flex align-items-center me-2" onClick={() => changeTheme(isDark)}>
              {!isDark ? <box-icon class="me-1" name="moon" /> : <box-icon class="me-1" name="sun" />}
              <span>{!isDark ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
            {!isAuth
              ? <Link className="btn btn-light d-flex align-items-center" to="/auth">
                <span className='me-1'>Sign In</span>
                <box-icon name="log-in" />
              </Link>
              : <Button className="btn btn-light d-flex align-items-center" onClick={logout}>
                <span className='me-1'>Logout</span>
                <box-icon name="log-out" />
              </Button>
            }
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default AppBar;