import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_quote,set_author } from "../../Redux/actions/todaysQuote";
import './quote.scss'
const Quote =()=>{
    const dispatch = useDispatch();
    const storeData = useSelector((state)=> state.allquotes);
    const { author,quote } = storeData;
    useEffect(()=>{
        getQuote();
    },[]);
    // const [data,setData] = useState({
    //     quotes:"",
    //     author:""
    // });

    const getQuote =async()=>{
        try{
            const response = await fetch("https://api.quotable.io/random");
            if (!response.ok) throw new Error();
            const msg = await response.json();
            dispatch(set_author(msg.author));
            dispatch(set_quote(msg.content));
            // setData({quotes:msg.content,author:msg.author}); 
        }catch(error){
            console.log(error);
        }
       
    }
    return(
        <div className="q-maindiv">
            <div className="q-div">
                <p className="q-p">"{quote}"</p>
                <p className="q-a">- {author}</p>
            </div>
            <div className="q-btn">
                <button onClick={getQuote}><i className="fa fa-refresh"></i></button>
            </div>
        </div>
    )
}
export default Quote;