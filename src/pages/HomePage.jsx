/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, /* Button */ } from 'react-bootstrap';
import { jsx, useTheme } from '@emotion/react';
import { chunk } from 'lodash'

const HomePage = () => {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);

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

  useEffect(async () => {
    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
    const data = await response.json();
    setPosts(data.articles)
  }, [])

  return (
    <>
      <section css={styles.section}>
        {/* <h2 css={styles.title}>Latest News</h2> */}
        <Row>
          <Col xl={4} lg={4} md={6} sm={6}>
            {posts.slice(0, 10).map((post, index) => (
              <Card key={index} css={styles.card}>
                <Card.Img variant="top" src={post.urlToImage} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.description}
                  </Card.Text>
                  {/* <Button variant="primary" className='w-100'>More</Button> */}
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col xl={4} lg={4} md={6} sm={6}>
            {posts.slice(10, 20).map((post, index) => (
              <Card key={index} css={styles.card}>
                <Card.Img variant="top" src={post.urlToImage} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.description}
                  </Card.Text>
                  {/* <Button variant="primary" className='w-100'>More</Button> */}
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col xl={4} lg={4} md={6} sm={6}>
            {posts.slice(20, 30).map((post, index) => (
              <Card key={index} css={styles.card}>
                <Card.Img variant="top" src={post.urlToImage} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.description}
                  </Card.Text>
                  {/* <Button variant="primary" className='w-100'>More</Button> */}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default HomePage;
