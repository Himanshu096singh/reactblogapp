import React, { useState } from 'react';
import BlogDate from './BlogDate';
import {Card,Button} from 'react-bootstrap';

const BlogComponent = (props) => {

    // let [newTitle, setNewTitle]= useState();
 
    // let  [title, setTitle] =  useState(props.title);

    // const ClickHandler = () =>{
    //    setTitle(newTitle); 
    // }
    // const ChangeHandler = (event) => {
    //     setNewTitle(event.target.value);
    // }
    return (
       
        <div>
            
            <Card style={{ width:"20rem",padding:"10px",margin:"10px"}}>
                <Card.Img src="https://picsum.photos/150/100"/>
                <Card.Body>
                    <Card.Title>
                        {props.title }
                    </Card.Title>
                    <Card.Text>
                    { props.description }
                    </Card.Text>
                    {/* <Button variant="success">
                        <BlogDate date = {props.date}></BlogDate>
                    </Button> */}
                    {/* <div>
                        <input type="text" value={newTitle} onChange={ChangeHandler} />
                        <Button variant="warning" onClick={ClickHandler}>
                            Update
                        </Button>
                    </div> */}
                </Card.Body>
            </Card>
            
            
        </div>

    );
}

export default BlogComponent;