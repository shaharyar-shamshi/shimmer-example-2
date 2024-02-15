import React, { useState, useEffect } from "react";
import axios from "axios";
import { Shimmer } from "react-shimmer-loader";
import "./App.css";

const ShimmerExample = () => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchRandomImage();
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get("https://source.unsplash.com/random");
      setImageUrl(response.request.responseURL);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <Shimmer width={300} height={300} borderRadius={"50%"} />
      ) : (
        <img
          src={imageUrl}
          alt="Random"
          style={{ width: 300, height: 300, borderRadius: "50%" }}
        />
      )}
    </div>
  );
};

export default ShimmerExample;
