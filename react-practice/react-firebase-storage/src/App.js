import { useState } from "react";
import { getStorage } from "./firebase/firebase.config";
import "./App.css";

const App = () => {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isImagesLoading, setIsImagesLoading] = useState(false);

  const handleImage = async (file) => {
    setIsImageLoading(true);
    const url = URL.createObjectURL(file);
    setImage(url);
    await getStorage
      .ref("images")
      .child(file.name)
      .put(file)
      .then(() => {
        getStorage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setImage(url);
          });
      });
    setIsImageLoading(false);
  };

  const handleImages = (files) => {
    setIsImagesLoading(true);
    let images = [];
    [...files].forEach((file) => {
      const url = URL.createObjectURL(file);
      images.push(url);
    });
    setImages(images);
    [...files].forEach(async (file) => {
      await getStorage
        .ref("images")
        .child(file.name)
        .put(file)
        .then(() => {
          getStorage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              setImages((prevImage) => [...prevImage, url]);
            });
        });
    });
    setImages(images);
    setIsImagesLoading(false);
  };

  return (
    <div>
      <input
        disabled={isImageLoading}
        type={"file"}
        onChange={(e) => handleImage(e.target.files[0])}
        accept="image/png,image/jpg,image/jpeg"
      />
      <br />
      <br />
      {image !== "" && <img width={100} alt="file-img-1" src={image} />}
      <br />
      <br />
      <input
        disabled={isImagesLoading}
        onChange={(e) => handleImages(e.target.files)}
        type={"file"}
        multiple
        accept="image/png,image/jpg,image/jpeg"
      />
      <br />
      <br />
      {images.map((image) => (
        <img key={image} width={100} alt="file-img-1" src={image} />
      ))}
      <br />
      <br />
    </div>
  );
};

export default App;
