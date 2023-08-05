const Create = ()=>{
    return(
            <form>
                <label>Blog title:</label>
                <input
                type="text"
                required/>


                <label>Blog body:</label>
               <textarea>
                required
               </textarea>

                <label>
                    <select>
                        <option value="mario"></option>
                        <option value="yoshi"></option>

                    </select>
                    <button>Add blog</button>
                </label>

            </form>
    );
}

export default Create;