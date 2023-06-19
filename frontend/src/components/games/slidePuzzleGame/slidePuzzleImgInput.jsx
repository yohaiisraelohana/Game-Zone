import React,{useState} from 'react'
import './slidePuzzleImgInput.css';
export default function SlidePuzzleImgInput() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div>
        <h2>Image Uploader</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && (
          <div>
            <h3>Selected Image:</h3>
            <img src={selectedImage} alt="Selected" />
          </div>
        )}
      </div>
    );
}
