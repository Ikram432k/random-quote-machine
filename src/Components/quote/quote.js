import { useEffect, useState,useLayoutEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_quote,set_author,remove_oldquote } from "../../Redux/actions/todaysQuote";
import './quote.scss'
import { gsap } from "gsap";

const Quote =()=>{
    const topDiv = useRef();
    const btnDiv = useRef();
    const dispatch = useDispatch();
    const storeData = useSelector((state)=> state.allquotes);
    const { author,quote } = storeData;
    useEffect(()=>{
        dispatch(remove_oldquote());
        getQuote();
    },[]);
    // const [data,setData] = useState({
    //     quotes:"",
    //     author:""
    // });
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          // // use scoped selectors
          // gsap.to(".box", { rotation: 360 });
          // or refs
          gsap.to(btnDiv.current, { rotation: 360 });
          
        }, topDiv);
        
        return () => ctx.revert();
      }, []);
    const getQuote =async()=>{
        try{
            const response = await fetch("https://api.quotable.io/random");
            if (!response.ok) throw new Error('sorry quote not available');
            const msg = await response.json();
            dispatch(set_author(msg.author));
            dispatch(set_quote(msg.content));
            // setData({quotes:msg.content,author:msg.author}); 
        }catch(error){
            console.log(error);
        }
       
    }
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.2 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
      };
    return(
        <div className="q-maindiv"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="q-div">
                <p className="q-p">"{quote}"</p>
                <p className="q-a">- {author}</p>
            </div>
            <div ref={topDiv} className="q-btn">
                <button  onClick={getQuote }><i ref={btnDiv} className="fa fa-refresh"></i></button>
            </div>
        </div>
    )
}
export default Quote;