import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
//----------MAIN RETURN-----------------------------------
    return (
        <div className="home">
        {error && <div>{error}</div>}
         {!error && isPending && <div>Loading...</div>}   
         {blogs && <BlogList blogs = {blogs} title = "All blogs"/>}
           
        </div>
        
      );
}
 
export default Home;