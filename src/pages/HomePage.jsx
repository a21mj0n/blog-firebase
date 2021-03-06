/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import { jsx, useTheme } from '@emotion/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const HomePage = () => {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'posts');
  const [isLoading, setIsLoading] = useState(false);

  const styles = {
    section: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
    },
    card: {
      backgroundColor: theme.surface,
      border: 'none',
      borderRadius: '8px',
      color: theme.onSurface,
      marginTop: '12px',

      img: {
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
      },
    },
    title: {
      color: theme.onBackground,
    },
  };

  useEffect(() => {

    const getPosts = async () => {
      setIsLoading(true);

      const data = await getDocs(postsCollectionRef);
      const postsList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setPosts(postsList);

      setIsLoading(false);
    };

    getPosts();
  }, [])

  return (
    <>
      {isLoading 
        ? <div className='text-center mt-5'>
            <Spinner animation="border" />
          </div>
        : <section css={styles.section}>
            {/* <h2 css={styles.title}>Posts</h2> */}
            <Row>
              <Col xl={4} lg={4} md={6} sm={6}>
                {posts.length > 0 && posts.slice(0, 10).map((post, index) => (
                  <Card key={index} css={styles.card}>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between my-4'>
                        <span>{post.title}</span> 
                        <span className='text-muted'>{post?.createdAt}</span>
                      </Card.Title>
                      <Card.Text>
                        {post.text}
                      </Card.Text>
                      <Card.Text>
                        Author <span className='fw-bold'>{post.author.name}</span>
                      </Card.Text>
                      {/* <Button variant="primary" className='w-100'>More</Button> */}
                    </Card.Body>
                  </Card>
                ))}
              </Col>
              <Col xl={4} lg={4} md={6} sm={6}>
                {posts.length > 10 && posts.slice(10, 20).map((post, index) => (
                  <Card key={index} css={styles.card}>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between my-4'>
                        <span>{post.title}</span> 
                        <span className='text-muted'>{post?.createdAt}</span>
                      </Card.Title>
                      <Card.Text>
                        {post.text}
                      </Card.Text>
                      <Card.Text>
                        Author <span className='fw-bold'>{post.author.name}</span>
                      </Card.Text>
                      {/* <Button variant="primary" className='w-100'>More</Button> */}
                    </Card.Body>
                  </Card>
                ))}
              </Col>
              <Col xl={4} lg={4} md={6} sm={6}>
                {posts.length > 20 && posts.slice(20, 30).map((post, index) => (
                  <Card key={index} css={styles.card}>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between my-4'>
                        <span>{post.title}</span> 
                        <span className='text-muted'>{post?.createdAt}</span>
                      </Card.Title>
                      <Card.Text>
                        {post.text}
                      </Card.Text>
                      <Card.Text>
                        Author <span className='fw-bold'>{post.author.name}</span>
                      </Card.Text>
                      {/* <Button variant="primary" className='w-100'>More</Button> */}
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
          </section>
      }
    </>
  );
};

export default HomePage;
