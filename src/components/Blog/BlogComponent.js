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
                                title = {blogs.blogtitle}
                                description = {blogs.blogdescription}
                                date = {blogs.blogdate}
                            />
                       )
                    )
                } 

            </CardGroup>
        </div>
    );
}

export default BlogComponent;