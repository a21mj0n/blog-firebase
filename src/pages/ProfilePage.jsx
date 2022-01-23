/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import { Row, Col, Card } from 'react-bootstrap';
import Button from '../components/forms/Button';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(auth.currentUser);
  })

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
      <Card className='mt-3 p-2'>
        Hello, {user?.displayName || ''}
      </Card>
    </>
  );
};

export default ProfilePage;
