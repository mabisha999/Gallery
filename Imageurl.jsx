import {useState,useEffect} from "react"

 function Imageurl(){
    const[imageUrl1,setImageUrl1]=useState(null);
useEffect(()=>{
        fetch('http://127.0.0.1:8000/Gallery')
        
             .then((res) => res.json())
             .then((json) => {
              console.log(json) 
              setImageUrl1(json);   
  })

    },[]);
        useEffect(() => {
console.log(imageUrl1); }, [imageUrl1]);

         
 return(
    <>
    <p>Images Form Backend</p>
    <div className="image">
              {imageUrl1 && imageUrl1 .map((a,a1) => {
               return(
 <div className="flower" key={a1}>
  
                <img src={a.url}></img>
                
                     

     </div> 
    )
  }
 
  )}

</div>
</>
    )
}
export default Imageurl