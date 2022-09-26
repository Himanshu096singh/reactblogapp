import React from 'react';
import BlogDate from './BlogDate';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const BlogItemComponent = (props) => {

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
                <Card.Img src={`http://localhost:8000/${props.image}`}/>
                <Card.Body>
                    <Card.Title>
                        {props.title }  
                    </Card.Title>
                    <Card.Text>
                    { props.description.substring(0,200).replace(/(<([^>]+)>)/ig, '') }...<b><Link to={`/blog/${props.slug}`} >Read More</Link></b>


                    </Card.Text>
                    <Button variant="success">
                        <BlogDate date = {new Date(props.date)}></BlogDate>
                    </Button>
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

export default BlogItemComponent;