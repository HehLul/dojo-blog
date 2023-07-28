import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    //use of hooks, helps refresh rendering on screen
const[blogs, setBlogs] = useState([]);//set as empty NOT null, that way it renders initial rendering
const [isPending, setIsPending] = useState(true);


//useEffect runs on EVERY render unlike useState which runs when ONLY state changes
//DONT change state inside udseEffect, leads to infinite loop
useEffect (()=>{
    setTimeout(() =>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending (false);//once data is fetched, set to false to stop loading screen
        })
    }, 1000);
}, []);

//----------MAIN RETURN-----------------------------------
    return (
        <div className="home">

         {isPending && <div>Loading...</div>}   
         {blogs && <BlogList blogs = {blogs} title = "All blogs"/>}
           
        </div>
        
      );
}
 
export default Home;