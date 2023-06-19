import React, { useEffect, useState } from 'react'
import './slidePuzzleGame.css'
import SlidePuzzleCollection from './slidePuzzleCollection'
import SlidePuzzleImgInput from './slidePuzzleImgInput'
import image from '../../../assets/images/games/slideImageTest.jpeg';

export default function SlidePuzzleGame() {
  const initial = ["top left","top center","top right","center left","center","center right","bottom left","bottom center"];
  const [imagesArr,setImagesArr] = useState([]);
  const [empty,setEmpty] = useState(8);

  const checkWinning = () => {
    const checkArr = [...initial,"empty"];
    for (let i = 0; i < checkArr.length ; i++) {
      if (checkArr[i] != imagesArr[i]) {
        return false;
      }      
    }
    return true;
  }
  console.log(checkWinning());

  useEffect(()=>{
    let startArray = [...initial.sort(()=>Math.random() - 0.5)];
    startArray.push("empty");
    setImagesArr(startArray);
  },[])

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
    <div >
      <SlidePuzzleImgInput/>
      <SlidePuzzleCollection/>
      <div className="slide-grid"  >
       {[...imagesArr].map((n,i)=> i != empty ? (<button 
          key={i}
          onClick={()=>moveImage(n,i)}
          style={{backgroundImage:`url(${image})`,backgroundPosition:n}}
          className="slide-image"></button>)
          : ( <button disabled={true} key={i} className='slide-image'></button> )
      )} 
      {/* <div className="slide-image outer-img" style={{backgroundImage:`url(${image})`}}>
      </div> */}
    </div>

    </div>
  )
}
  