import React from 'react'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion';

export default function Home() {

  const myRef = useRef(null);
  const isInView = useInView(myRef);
  useEffect(() => {
    if (isInView) {
      console.log('Element is in view');
    }
  }, []);

  return (
    <>
    <br />
    <h1>Content title.</h1>
    <br />
    <section className='first-home'>
    
 <div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>

<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
<div className='box' ref={myRef}>
    <h2>lorem</h2>
    <p> 
    text text text text text text text text text text 
    text text text text text text text text text text
    text text text text text text text text text text
    text text text text text text text text text text
    </p>
</div>
</section>
</>
  )
}
