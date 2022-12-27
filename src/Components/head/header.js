import './header.scss';
import { gsap } from "gsap";
import { useRef,useLayoutEffect,useState, useEffect} from 'react';
const Head =()=>{
    const topDiv = useRef();
    const headDiv = useRef();
    const [count, setCount] = useState(0);
    const [delayedCount, setDelayedCount] = useState(0);
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        // // use scoped selectors
        // gsap.to(".box", { rotation: 360 });
        // or refs
        gsap.to(".headDiv", {
            x: 100,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
          });
        gsap.to(headDiv.current, { rotation: 360 });
        
      }, topDiv);
      
      return () => ctx.revert();
    }, [delayedCount]);
    useEffect(() => {
        const timer = setTimeout(() => {
          setDelayedCount(count);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [count]);
return(
    <div ref={topDiv} className="topDiv">
        <header ref={headDiv} className="headDiv">
            <h1 onClick={() => setCount(count + 1)}>Today's Random Quote</h1>
        </header>
    </div>
)
}
export default Head; 