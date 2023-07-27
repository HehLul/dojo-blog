import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //use of hooks, helps refresh rendering on screen
const[blogs, setBlogs] = useState([
    {title:"My New Website", body: "lorem ipsum...", author: "mario", id: 1},
    {title: "Welcome Party", body:'lorem ipsum...', author: "luigi",id: 2},
    {title: "Web Dev Top Tips", body:'lorem ipsum...', author: "mario",id: 3}
]);

    return (
        <div className="home">
            <BlogList blogs = {blogs} title = "All blogs"/>
            <BlogList blogs = {blogs.filter((blog) => blog.author==='mario')} title = "Mario's blogs"/>

        </div>
        
      );
}
 
export default Home;