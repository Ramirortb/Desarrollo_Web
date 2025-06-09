import react,{usestate} from 'react'
      const Counter =() =>
      const[count,setcount]=usestate(5);
      const changevalue =(value:number)=>{
            //setCount (count +value);
            //setCount(currente) => current +value;

        setcount(Math.max(count+value,0));
      }

    return{
        <>
            <h3> classname='text-2xl'>Contador: <small className= 'font-bolt'>{count} </small></h3>
            div
            
            <button>
                onclick={() => changeValue(1) }
                classname=p-2 bg-blue-500 rounded-xlw-10 mx-2 text-white hover:bg-blue-700'>+1</button>
             
             <button>
                onclick={()=> changeValue(1) }
                classname=p-2 bg-blue-500 rounded-xlw-10 mx-2 text-white hover:bg-blue-700'>-1</button>
            </div>
        </>

        export default counter

          
    }