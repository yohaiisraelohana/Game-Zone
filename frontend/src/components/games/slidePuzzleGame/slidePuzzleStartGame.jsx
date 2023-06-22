import React, { useEffect, useState } from 'react'
//style
import './slidePuzzleStartGame.css';


export default function SlidePuzzleStartGame({image,box_size}) {
    const initial = ["top left","top center","top right","center left","center","center right","bottom left","bottom center"];
    const [imagesArr,setImagesArr] = useState([]);
    const [empty,setEmpty] = useState(8);


    useEffect(()=>{
        let startArray = [...initial.sort(()=>Math.random() - 0.5)];
        startArray.push("empty");
        setImagesArr(startArray);
    },[]);

    const checkWinning = () => {
        const checkArr = [...initial,"empty"];
        for (let i = 0; i < checkArr.length ; i++) {
          if (checkArr[i] != imagesArr[i]) {
            return false;
          }      
        }
        return true;
      }

    const moveImage = (n,i) => {
        if (i+1 == empty || i-1 == empty || i+3 == empty || i-3 == empty) {
          let arr = [...imagesArr];
          arr[i] = arr[empty];
          arr[empty] = n;
          setEmpty(i);
          setImagesArr(arr);
        } else {
          alert("impossible move")
        }
        if (checkWinning()) {
          alert("congradilations !!!");
        }
      }
  return (
    <div 
        className="slide-grid"
        style={{height:box_size,width:box_size}}>

    {[...imagesArr].map((n,i)=> 
    (
        <button 
        key={i}
        onClick={()=>moveImage(n,i)}
        disabled={i == empty}
        style={
            i == empty 
            ?   {height:box_size/3,width:box_size/3}
            :   {height:box_size/3,width:box_size/3,backgroundImage:`url(${image})`,backgroundPosition:n}
        }
        className="slide-image"></button>
    ))} 
   <img src={image} alt="bg-image" className='bg-image' />
 </div>
  )
}
/*


*/