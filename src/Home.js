import { useState } from "react";

const Home = () => {
    //use of hooks, helps refresh rendering on screen
const[blogs, setBlogs] = useState([
    {title:"My New Website", body: "lorem ipsum...", author: "mario", id: 1},
    {title: "Welcome Party", body:'lorem ipsum...', author: "luigi",id: 2},
    {title: "Web Dev Top Tips", body:'lorem ipsum...', author: "bob",id: 3}
]);

    return (
        <div className="home">

        </div>
        
      );
}
 
export default Home;