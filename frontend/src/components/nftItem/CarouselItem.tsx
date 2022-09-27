import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";

import styles from "./NftItem.module.css";

const CarouselItem = (props: any) => {
  const { nft } = props;
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const getMetadata = async (metaDataURI: string) => {
    await axios({ url: metaDataURI })
      .then((res: any) => {
        const { fileName, name, author, description, imageURL } = res.data;
        setFileName(fileName);
        setName(name);
        setAuthor(author);
        setDescription(description);
        setImageURL(imageURL);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const { metaDataURI } = props;
    getMetadata(metaDataURI);
  }, [props]);

  return (
    <button className={styles.carouselContainer}>
      <div className={styles.card}>
        <div className={styles.front}>
          <Suspense fallback={<p>이미지 로딩중</p>}>
            <img className={styles.img} src={imageURL} alt="" />
          </Suspense>
        </div>
        <div className={styles.back}>
          <p>리드미: {name}</p>
          <p>작성자: {author}</p>
          <p>설명: {description}</p>
          <p>맞춘이: ??????</p>
          <small>파일이름: {fileName}</small>
        </div>
      </div>
      <div className={styles.nftInfo}>
        <p>리드미ID: {nft.readmeTokenId}번째</p>
        <p>PRICE: {nft.readmeTokenPrice}</p>
      </div>
    </button>
  );
};

export default CarouselItem;
