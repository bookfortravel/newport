import React from "react";

function PrivacyPolicy({ close }) {
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
padding: "30px 25px",
overflowY: "auto",
overflowX: "hidden",
boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
position: "relative"
        }}
      >

        <h2 style={{ marginBottom: "20px", letterSpacing: "2px" }}>
          Privacy Policy
        </h2>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          At NEWPORT, we respect your privacy and are committed to protecting
          your personal information. Any information collected through our
          website is used solely to improve your shopping experience and
          provide better service.
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          We may collect basic details such as your name, phone number, email
          address, or location when you contact us or interact with our
          services.
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Your personal data will never be sold, rented, or shared with third
          parties except where required by law or necessary to provide our
          services.
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          By using this website, you consent to our privacy practices as
          outlined in this policy.
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
  );
}

export default PrivacyPolicy;
