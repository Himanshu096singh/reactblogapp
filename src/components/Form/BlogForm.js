import React, { useState } from "react";
import {Button, Form, FloatingLabel} from 'react-bootstrap';
import './BlogForm.css';


const BlogForm = (props) =>{

    const [title, setTitle] = useState("ww");
    const [dateentered, setDateEntered] = useState("ww"); 
    const [description, setDescription] = useState("ww");
    
    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const dateHandler = (event) => {
        setDateEntered(event.target.value);
    };
    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const handlerValue = {
            blogtitle:  title,
            blogdate:   dateentered,
            blogdescription:    description,
        };

        // console.log(handlerValue);

        props.getBlogData(handlerValue);

        setTitle("");
        setDateEntered("");
        setDescription("");

    }

    return (
        <div className="blogform" >
            <Form onSubmit={submitHandler}  >
                <Form.Group className="mb-3">
                    <Form.Label>
                        Title
                    </Form.Label>
                    <Form.Control type="title" placeholder="Blog Title" value={title} onChange={titleHandler}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Date
                    </Form.Label>
                    <Form.Control type="date" placeholder="Blog Date" value={dateentered} onChange={dateHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }} value={description} 
                            onChange={descriptionHandler} />
                    </FloatingLabel>
                </Form.Group>    
                <Button variant="success" type="submit" className="mb-3">
                    Submit
                </Button>   
                </Form>
            
        </div>  
    );
}

export default BlogForm;