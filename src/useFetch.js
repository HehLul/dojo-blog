import { useEffect, useState } from "react";

const useFetch = (url) => {
        //use of hooks, helps refresh rendering on screen
    const[data, setData] = useState([]);//set as empty NOT null, that way it renders initial rendering
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect (()=>{

        const abortCont = new AbortController();

        setTimeout(() =>{
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){throw Error("could not fetch data.");}
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending (false);//once data is fetched, set to false to stop loading screen
            }).catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message)
                }
            })
        }, 1000);
        
        return ()=>abortCont.abort();//aborts fetch associated with previous link route

    }, [url]);//when url changes, reruns the code to fetch data

    return {data, isPending, error};
}

export default useFetch;