import React,{useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../Blog/BlogComponent.css';
import {Container, Row, Card} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const BlogSingle = () => {
     const { slug } = useParams();
        const [blogs, setBlogs] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:8000/api/${slug}`).then(
            response =>{
                return response.json();
            }
        ).then(
            data=>{
                console.log(data);
                setBlogs(data);
            }
        )
    },[]);
     return (
        <Container>
            <Row className="blogcomponent">
                <Card>
                <Card.Img variant="top" src={blogs.image}/>
                <Card.Body>
                    <Card.Title>
                    <h1>{blogs.title}</h1>
                        
                    </Card.Title>
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{ __html:blogs.description}}></div>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Row>
        </Container>
      );
}

export default BlogSingle;