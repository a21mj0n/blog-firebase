import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/forms/Button';
import CustomProgressBar from '../../../components/bars/CustomProgressBar';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth, storage } from '../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Create = () => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const types = ['image/png', 'image/jpg', 'image/jpeg'];

  const changeFile = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setValidated(false);
    } else {
      setFile(null);
      setValidated(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title === '' || text === '' || file === null) {
      setValidated(true);
      return;
    }

    const storageRef = ref(storage, `images/${file?.name}`);
    const url = await getDownloadURL(storageRef);
    const postCollectionRef = collection(db, 'posts');
    const date = new Date();

    setIsLoading(true);

    await addDoc(postCollectionRef, {
      title,
      text,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
      },
      image: url,
      createdAt: date.toLocaleDateString(),
    });

    setIsLoading(false);

    navigate('/profile');
  };

  return (
    <Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
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
            onChange={changeFile}
            required
          />

          {file && <CustomProgressBar className="mt-3" file={file} />}

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
      { isLoading 
          ? 'Creating Post ...' 
          : <Button iconName="save" icontype="regular" type="submit">Submit form</Button>
      }
    </Form>
  );
};

export default Create;