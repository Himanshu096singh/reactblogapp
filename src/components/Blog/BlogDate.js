
const BlogDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
   
    return(
        <div> 
            <div> <strong> {year}  </strong></div>
            <div> { month }, {day} </div>
        </div>
    );
}

export default BlogDate;