import { useParams } from "react-router-dom";
import useFetch from './useFetch';
const BlogDetails = () => {

    const { id } = useParams();//allows to grab parameters from the dynamic url
    console.log("id is " + id);
    const {data:blog , isPending, error} = useFetch("http://localhost:8000/blogs/"+id);
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            <h2> {blog.title } </h2>
            <p> Written by {blog.author } </p> 
            <div> {blog.body} </div>
        </div>
     );
}
 
export default BlogDetails;