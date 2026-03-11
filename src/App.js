import React, { useState, useEffect, useRef } from "react";
import logo from "./images/logo.png";
import hero1 from "./images/hero1.png";
import hero2 from "./images/hero2.png";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import "./styles.css";

import dress from "./images/dress.jpg";
import tops from "./images/tops.jpg";
import ethnic from "./images/ethnic.jpg";
import casual from "./images/casual.jpg";

import summer from "./images/summer.jpg";
import party from "./images/party.jpg";
import festive from "./images/festive.jpg";
import price from "./images/price.jpg";
import quality from "./images/quality.jpg";
import trust from "./images/trust.jpg";
import google from "./images/google.png";
import rating from "./images/rating.png";
import reviewsVideo from "./videos/reviews.mp4";
import logo1 from "./images/logo1.jpg";
function App() {

  const images = [hero1, hero2];
  const [current, setCurrent] = useState(0);
const [showAbout, setShowAbout] = useState(false);
const [showPrivacy, setShowPrivacy] = useState(false);
const [showTerms, setShowTerms] = useState(false);
const featuredRef = useRef(null);
const [menuOpen, setMenuOpen] = useState(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToCollections = () => {
  featuredRef.current.scrollIntoView({ behavior: "smooth" });
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <div
        style={{
          height: "560px",
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          transition: "background-image 1.5s ease-in-out"
        }}
      >

        {/* NAVBAR */}
<div className="navbar"
style={{
position: "absolute",
top: 0,
width: "100%",
            background:
              "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.3), rgba(255,255,255,0))"
          }}
        >
          <img 
  src={logo} 
  alt="logo" 
  style={{ height: "70px", cursor: "pointer" }}
  onClick={scrollToTop}
/>

{/* HAMBURGER ICON */}

<div
className="hamburger"
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</div>

{/* NAV LINKS */}

<div className={`nav-links ${menuOpen ? "active" : ""}`}>

<span
style={{cursor:"pointer"}}
onClick={scrollToTop}
>
Home
</span>

<span
style={{cursor:"pointer"}}
onClick={scrollToCollections}
>
Collections
</span>

<span
style={{cursor:"pointer"}}
onClick={()=>setShowAbout(true)}
>
About Us
</span>

<span>Contact</span>

</div>
        </div>

        {/* HERO TEXT */}
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "180px",
            textAlign: "center",
            flexDirection: "column"
          }}
        >

          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              padding: "8px 28px",
              borderRadius: "6px",
              marginBottom: "15px"
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                color: "#ff4f7a",
                fontWeight: "800",
                letterSpacing: "5px",
                margin: "0"
              }}
            >
              NEWPORT
            </h2>
          </div>

          <h1
            style={{
              fontSize: "46px",
              marginBottom: "6px",
              fontWeight: "700",
              color: "grey"
            }}
          >
            Modern Fashion For Women
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "black"
            }}
          >
            Trendy • Elegant • Everyday Wear
          </p>

          <button
  onClick={scrollToCollections}
            style={{
              marginTop: "18px",
              padding: "12px 28px",
              background: "#ff4f7a",
              border: "none",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              borderRadius: "6px",
              fontWeight: "600"
            }}
          >
            Explore Collection
          </button>

        </div>
      </div>

      {/* CATEGORY SECTION */}

      <div style={{ padding: "70px 80px", background: "#fafafa" }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "50px",
          letterSpacing: "3px"
        }}>
          SHOP BY CATEGORY
        </h2>

  <div className="category-grid">

          {/* DRESSES */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={dress}
              alt="Dresses"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <h3 style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600"
            }}>
              Dresses
            </h3>
          </div>

          {/* TOPS */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={tops}
              alt="Tops"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <h3 style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600"
            }}>
              Tops
            </h3>
          </div>

          {/* ETHNIC */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={ethnic}
              alt="Ethnic Wear"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <h3 style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600"
            }}>
              Ethnic Wear
            </h3>
          </div>

          {/* CASUAL */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={casual}
              alt="Casual Wear"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <h3 style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600"
            }}>
              Casual Wear
            </h3>
          </div>

        </div>

      </div>


      {/* WHY CHOOSE US SECTION */}

<div style={{ padding: "90px 80px", background: "white" }}>

  <h2 style={{
    textAlign: "center",
    fontSize: "34px",
    marginBottom: "70px",
    letterSpacing: "4px"
  }}>
    WHY CHOOSE US
  </h2>

<div
className="why-grid"
style={{
display: "grid",
gap: "40px",
textAlign: "center"
}}
>

    {/* CARD 1 */}
    <div
      style={{
        padding: "45px",
        borderRadius: "14px",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease"
      }}
      onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-8px)"}
      onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
    >

      <img
        src={price}
        alt="Best Prices"
        style={{ height: "200px", marginBottom: "18px" }}
      />

      <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
        Unbeatable Prices
      </h3>

      <p style={{ color: "gray", fontSize: "15px" }}>
        Fashion starting from ₹999
      </p>

    </div>


    {/* CARD 2 */}
    <div
      style={{
        padding: "45px",
        borderRadius: "14px",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease"
      }}
      onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-8px)"}
      onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
    >

      <img
        src={quality}
        alt="Best Quality"
        style={{ height: "200px", marginBottom: "18px" }}
      />

      <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
        Best Quality
      </h3>

      <p style={{ color: "gray", fontSize: "15px" }}>
        Premium fabrics & finishing
      </p>

    </div>


    {/* CARD 3 */}
    <div
      style={{
        padding: "45px",
        borderRadius: "14px",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease"
      }}
      onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-8px)"}
      onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
    >

      <img
        src={trust}
        alt="Trusted Brand"
        style={{ height: "200px", marginBottom: "18px" }}
      />

      <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
        Trusted Brand
      </h3>

      <p style={{ color: "gray", fontSize: "15px" }}>
        Present in the market for 20+ years
      </p>

    </div>

  </div>

</div>


      {/* FEATURED COLLECTIONS */}

      <div ref={featuredRef} style={{ padding: "80px 80px", background: "#fafafa" }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "60px",
          letterSpacing: "3px"
        }}>
          FEATURED COLLECTIONS
        </h2>

<div
className="featured-grid"
style={{
display: "grid",
gap: "30px"
}}
>

          {/* SUMMER */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}>
            <img
              src={summer}
              alt="Summer Collection"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <h3 style={{
              position: "absolute",
              bottom: "25px",
              left: "25px",
              color: "white",
              fontSize: "26px",
              fontWeight: "600"
            }}>
              Summer Collection
            </h3>
          </div>


          {/* PARTY */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}>
            <img
              src={party}
              alt="Party Wear"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <h3 style={{
              position: "absolute",
              bottom: "25px",
              left: "25px",
              color: "white",
              fontSize: "26px",
              fontWeight: "600"
            }}>
              Party Wear
            </h3>
          </div>


          {/* FESTIVE */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}>
            <img
              src={festive}
              alt="Festive Collection"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <h3 style={{
              position: "absolute",
              bottom: "25px",
              left: "25px",
              color: "white",
              fontSize: "26px",
              fontWeight: "600"
            }}>
              Festive Collection
            </h3>
          </div>

        </div>

      </div>


      {/* GOOGLE REVIEWS SECTION */}

      <div style={{ padding: "90px 80px", background: "#fafafa", textAlign: "center" }}>

        {/* GOOGLE RATING HEADER */}

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px"
        }}>

          <img
            src={google}
            alt="Google Logo"
            style={{ height: "50px" }}
          />

          <img
            src={rating}
            alt="Google Rating"
            style={{ height: "50px" }}
          />

        </div>

        <p style={{
          fontSize: "40px",
          color: "gray",
          marginBottom: "40px"
        }}>
           What customers say about us ❤️
        </p>


              {/* REVIEW VIDEO */}

        <video className="video"
          src={reviewsVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
          style={{
            width: "70%",
            borderRadius: "12px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
          }}
        />

      </div>


      {/* FOOTER */}

      <div style={{
        background: "#ff4f7a",
        padding: "10px 80px",
        color: "white"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center"
        }}>

          {/* LOGO */}

          <div>
            <img
              src={logo1}
              alt="Newport Logo"
              style={{ height: "100px" }}
            />
          </div>


          {/* QUICK LINKS */}

          <div>
            <h3 style={{ marginBottom: "10px" }}>
              Quick Links
            </h3>

<p 
  style={{ margin: "6px 0", cursor: "pointer" }}
  onClick={()=>setShowAbout(true)}
>
  About Us
</p>

<p style={{ margin: "6px 0", cursor: "pointer" }}
onClick={() => setShowPrivacy(true)}>
Privacy Policy
</p>

<p style={{ margin: "6px 0", cursor: "pointer" }}
onClick={() => setShowTerms(true)}>
Terms & Conditions
</p>
          </div>


          {/* CONTACT */}

          <div>
            <h3 style={{ marginBottom: "10px" }}>
              Contact Us
            </h3>

            <p style={{ margin: "6px 0" }}>
              📍 22, Main Street, Mhow, 
MP, India 453441
            </p>

            <p style={{ margin: "6px 0" }}>
              📞 +91 8989504122
            </p>

            <p style={{ margin: "6px 0" }}>
              ✉ newport4056@gmail.com
            </p>
          </div>

        </div>


        {/* COPYRIGHT */}

        <div style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.3)",
          paddingTop: "20px",
          fontSize: "14px"
        }}>
          © 2026 Newport Fashion. All rights reserved.
        </div>

      </div>

{/* ABOUT US POPUP */}
{/* WHATSAPP BUTTON */}

<a
href="https://wa.me/918989504122"
target="_blank"
rel="noopener noreferrer"
className="whatsapp-button"
>
<img
src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
alt="WhatsApp"
style={{ width: "60px" }}
/>
</a>
{/* ABOUT US POPUP */}
{showAbout && (
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
        background: "white",
        width: "80%",
        maxWidth: "900px",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        paddingTop: "50px"
      }}
    >

      {/* SIMPLE CLOSE BUTTON */}

      <button
        onClick={() => setShowAbout(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          fontSize: "22px",
          fontWeight: "bold",
          padding: "6px 12px",
          background: "#ff4f7a",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        CLOSE
      </button>

      <AboutUs close={() => setShowAbout(false)} />

    </div>
  </div>
)}

{showPrivacy && <PrivacyPolicy close={() => setShowPrivacy(false)} />}
{showTerms && <TermsConditions close={() => setShowTerms(false)} />}
    </div>


  );
}

export default App;