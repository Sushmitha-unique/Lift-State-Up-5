import React,{useState} from 'react'

 const Liftstateup = () => {
    const  inti={
        name:'',
        password:''
    }
    const [Imvalue,setImvalue] = useState(inti);
    const [logged,setlogged] = useState(false);
    function setchange(e){
      e.preventDefault();
      setlogged(true);
    console.log(Imvalue);
    console.log("You are logged in..!");
    }
  return (
    <div >
      <div className='sl'>
        <h1>Parent Component</h1>
        {!logged && <form>
           <p> Username:<input type='text'  onChange={e=>setImvalue({...Imvalue,name:e.target.value})} required /> </p>
           <p>  Password:<input type='Password'  onChange={e=>setImvalue({...Imvalue,password:e.target.value})} required /></p>
            <button  onClick={setchange}>Login</button>
        </form>}
        </div>
        <div>
        {
          logged && <p>You are logged in..!</p>
        }
        </div>
    </div>
  )
}
export default Liftstateup;
