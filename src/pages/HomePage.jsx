/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { jsx, useTheme } from '@emotion/react';

const HomePage = () => {
  const theme = useTheme();

  const styles = {
    section: {
      color: theme.primary,
      marginTop: '4rem'
    },
    card: {
      backgroundColor: theme.secondary,
      boxShadow: '0px 2px 10px 4px rgba(0, 0, 0, .1)',
      border: 'none',
      borderRadius: '8px',

      img: {
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
      }
    },
    title: {
      color: theme.secondary,
    }
  }

  return (
    <>
      <section css={styles.section}>
        <h2 css={styles.title}>Latest Posts</h2>
        <Row>
          <Col md={4}>
            <Card css={styles.card}>
              <Card.Img variant="top" src="https://picsum.photos/seed/picsum/600/400.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card css={styles.card}>
              <Card.Img variant="top" src="https://picsum.photos/seed/picsum/600/400.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card css={styles.card}>
              <Card.Img variant="top" src="https://picsum.photos/seed/picsum/600/400.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default HomePage;
