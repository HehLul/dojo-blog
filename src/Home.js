import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    //use of hooks, helps refresh rendering on screen
const[blogs, setBlogs] = useState([
    {title:"My New Website", body: "lorem ipsum...", author: "mario", id: 1},
    {title: "Welcome Party", body:'lorem ipsum...', author: "luigi",id: 2},
    {title: "Web Dev Top Tips", body:'lorem ipsum...', author: "mario",id: 3}
]);

const [name, setName] = useState("mario");

const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog => blog.id !== id);//keep blogs that dont match id
    setBlogs(newBlogs);//set the blogs to the new blogs 
}

//useEffect runs on EVERY render unlike useState which runs when ONLY state changes
//DONT change state inside udseEffect, leads to infinite loop
useEffect (()=>{
    console.log("use effect ran.");
    console.log(name);
}, [name])

//----------MAIN RETURN-----------------------------------
    return (
        <div className="home">
            <BlogList blogs = {blogs} title = "All blogs" handleDelete = {handleDelete}/>
            <button onClick = {()=>setName("luigi")}>change name</button>
            <p> {name} </p>
        </div>
        
      );
}
 
export default Home;