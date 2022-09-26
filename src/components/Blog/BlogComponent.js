import BlogItemComponent from "./BlogItemComponent";
import './BlogComponent.css';
import {CardGroup} from 'react-bootstrap';

const BlogComponent = (props) => {
    // console.log(`mm ${props}`);
    return(
        <div className="blogcomponent">
            <CardGroup>
               {
                    props.data.map(
                        blogs => (
                            <BlogItemComponent 
                                key = {blogs.id}
                                id = {blogs.id}
                                title = {blogs.title}
                                description = {blogs.description}
                                date = {blogs.created_at}
                                slug = {blogs.slug}
                                image = {blogs.image}
                                
                            />
                       )
                    )
                } 

            </CardGroup>
        </div>
    );
}

export default BlogComponent;