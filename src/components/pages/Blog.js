import React,{useEffect, useState} from 'react';
import BlogComponent from '../Blog/BlogComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogForm from '../Form/BlogForm';
import {Container, Row} from 'react-bootstrap';

let bloglist = [
    {
        id: 1,
        title: "This is my first Title",
        description: "This is first description",
        date: "",
    },

];

const Blog = (props) =>{
    const [blogs,setBlogs] = useState(bloglist)   
        useEffect(()=>{
            fetch("http://127.0.0.1:8000/api/blogs").then(
                response =>{
                    return response.json();
                }
            ).then(
                data=>{
                    // console.log(data);
                    setBlogs(data);
                }
            )
        },[]);
           

        
        
        const addBlogData = (blogFormData) => {
            console.log(blogFormData);
        const idAdd = {id:Math.floor(Math.random()*99) ,...blogFormData}
        console.log(idAdd)
        const newBlogData= [
         idAdd, ...blogs
        ];
        setBlogs(newBlogData);
   }
   
    
    return(
            <Container>
                <h1 style={{textAlign:"center", padding:"15px"}}>
                    My Articles
                </h1>
                <BlogForm getBlogData = {addBlogData}/>
                <Row>
                    <BlogComponent data={blogs} />
                </Row>
            </Container>  
    )
}
export default Blog;
  