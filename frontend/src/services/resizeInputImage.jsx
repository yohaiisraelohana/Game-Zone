
export const resizeImage = (file,height,width) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const img = new Image();
  
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
  
          canvas.toBlob(function(blob) {
            resolve(blob);
          }, 'image/jpeg');
        };
  
        img.src = event.target.result;
      };
  
      reader.onerror = function(event) {
        reject(event.target.error);
      };
  
      reader.readAsDataURL(file);
    });
}