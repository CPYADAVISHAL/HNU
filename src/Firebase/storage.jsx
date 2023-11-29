
import { useEffect,useState } from "react";
import {db} from "./firebase";
const Storage = () =>{
    const [movieList,setMovieList] = useState([]);
    useEffect{() => {
        const getMovieList = async () => {
        try{
            const data = await getDocs(movieCollectionRef);
            console.log(data);
        }
        catch(err){
console.log(err);
        }
        };
    }}
}

