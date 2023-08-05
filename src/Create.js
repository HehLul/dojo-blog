import { useState } from "react";

const Create = ()=>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-type':"applicaiton/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
        });
    
    }

    return(
        
<div className="create">

        <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value = {title} 
                onChange={(e)=>setTitle(e.target.value)}     
                />


                <label>Blog body:</label>
               <textarea
               required
               value = {body}
               onChange={(e)=>setBody(e.target.value)}
               >
               </textarea>

                <label>
                    <select
                    value = {author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>

                    </select>
                    <button>Add blog</button>
                </label>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
            </form>
            </div>
    );
}

export default Create;