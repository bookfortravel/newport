import React from "react";

function TermsConditions({ close }) {
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
          Terms & Conditions
        </h2>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          By accessing and using the NEWPORT website, you agree to comply with
          the following terms and conditions.
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          All content on this website including images, designs, logos, and
          text are the property of NEWPORT and may not be copied, reproduced,
          or distributed without permission.
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Product availability, pricing, and promotional offers are subject
          to change without prior notice.
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          NEWPORT reserves the right to modify or update these terms at any
          time without prior notice.
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

export default TermsConditions;
