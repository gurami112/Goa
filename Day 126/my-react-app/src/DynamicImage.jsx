function DynamicImage({ imageProps }) {
    let src = "https://via.placeholder.com/150";
    let alt = "Default Image";
  
    if (imageProps) {
      if (imageProps.src) {
        src = imageProps.src;
      }
      if (imageProps.alt) {
        alt = imageProps.alt;
      }
    }
  
    return <img src={src} alt={alt} />;
  }
  
  export default DynamicImage;