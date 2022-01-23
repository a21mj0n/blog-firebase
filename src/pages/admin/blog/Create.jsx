import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/forms/Button';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../../firebase';


const Create = () => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (validated) {
      const postCollectionRef = collection(db, 'posts')
      await addDoc(postCollectionRef, {
        title,
        text,
        author: {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
        }
      });

      navigate('/profile')
    }
  };

  return (
    <Form className='mt-3' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Post Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Post Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Post Image"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Post Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Post Body"
            aria-describedby="inputGroupPrepend"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please type some text.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button iconName="save" icontype="regular" type="submit">Submit form</Button>
    </Form>
  );
}

export default Create;