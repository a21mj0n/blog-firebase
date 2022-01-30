/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx, useTheme } from '@emotion/react';
import { Row, Col, Card } from 'react-bootstrap';
import Button from '../components/forms/Button';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
    getUser();
  }, [])

  return (
    <>
      <Row className='mt-3'>
        <Col className='d-flex justify-content-start align-items-center'>
          <h3>Profile</h3>
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <Button onClick={() => navigate('/profile/posts/create')} iconName="plus" icontype="regular">Add Post</Button>
        </Col>
      </Row>
      <Card className='mt-3 p-2' css={{ backgroundColor: theme.surface, color: theme.onSurface }}>
        Hello, {user ? user.name : 'User'}
      </Card>
    </>
  );
};

export default ProfilePage;
