import React,{useState} from 'react';
import './App.css';
import BlogComponent from './components/Blog/BlogComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogForm from './components/Form/BlogForm';

import {Container, Row} from 'react-bootstrap';

let bloglist = [
    {
        id:1,
        title:"this is one"
    },
    {
        id:2,
        title:"this is one"
    }
];

const App = () => {
 
    const [blogs,setBlogs] = useState(bloglist);

    fetch('http://localhost:8000/api/blogs')
    .then(response => {
            return  response.json();
        }
    ).then(apidata => {
            console.log(apidata);
        // setBlogs(apidata);
        }
    );

    const addBlogData = (blogFormData) => {

        

        // console.log(blogFormData);
        // const idAdd = {id:Math.floor(Math.random()*99) ,...blogFormData}

        // // console.log(idAdd)

        // const newBlogData= [
        //     idAdd, ...blogs
        // ];

        // setBlogs(newBlogData);
        // console.log(newBlogData);
        
        // const newBlogData = [`
        // id: ${Math.random(2)}`, blogFormData, ...blogs ]

    //    let newBlog = {
    //        newBlogData, ...blogs
    //     }
    // let newBlog = [blogFormData, ...blogs]
    //     console.log(newBlog)
    //     setBlogs(newBlog);

    // console.log("asdf");
        // console.log(newBlogData);
    }
   


    return (
            <div>
                <Container>
                    <h1 style={{textAlign:"center", padding:"15px"}}>
                        My Articles
                    </h1>
                    <BlogForm getBlogData = {addBlogData}/>
                    <Row>
                        <BlogComponent data={blogs} />
                    </Row>
                </Container>    

            </div>
         );
}

export default App;