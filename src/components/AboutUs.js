import React from "react";
import aboutBg from "../images/aboutbg.jpg";

function AboutUs({ close }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >

<div
  style={{
    width: "90%",
    maxWidth: "800px",
    maxHeight: "90vh",
    background: "white",
    borderRadius: "10px",
    overflowY: "auto",
    overflowX: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
  }}
>

        {/* HEADER IMAGE */}

        <div
          style={{
            height: "220px",
            backgroundImage: `url(${aboutBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        {/* CONTENT */}

        <div style={{ padding: "40px" }}>

          <h2 style={{ marginBottom: "20px", letterSpacing: "2px" }}>
            About Newport
          </h2>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Discover your signature style at <b>NEWPORT</b> — a premium destination
            for chic and fashionable women's clothing.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Located on Main Street in Dr. Ambedkar Nagar, our boutique brings together
            a carefully curated collection of modern dresses, designer pieces,
            stylish tops, and trendy denim that elevate your everyday wardrobe.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            At NEWPORT, we believe fashion is more than clothing — it is confidence,
            individuality, and expression. Our collections are thoughtfully selected
            to suit every moment of life, from casual daywear to elegant evening occasions.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Known for exceptional fashion and personalized service, NEWPORT has become
            a trusted choice for style-conscious shoppers across Indore, Ujjain,
            and the Pithampur Industrial Area.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Whether you're looking for timeless classics or the latest trends,
            NEWPORT is where fashion meets confidence.
          </p>

          <button
            onClick={close}
            style={{
              marginTop: "25px",
              padding: "10px 20px",
              background: "#ff4f7a",
              border: "none",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default AboutUs;
