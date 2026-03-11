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
import price from "./images/price.png";
import quality from "./images/quality.png";
import trust from "./images/trust.png";
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
const [showContact, setShowContact] = useState(false);

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


useEffect(() => {

const container = document.querySelector(".why-scroll");
if(!container) return;

const card = container.querySelector(".why-card");
if(!card) return;

const cardWidth = card.offsetWidth + 40;

let index = 0;
const totalCards = container.querySelectorAll(".why-card").length;

const autoScroll = setInterval(()=>{

index++;

if(index >= totalCards){
index = 0;
}

container.scrollTo({
left: index * cardWidth,
behavior:"smooth"
});

},3000);

return ()=> clearInterval(autoScroll);

},[]);
  return (
  <div style={{overflowX:"hidden", width:"100%"}}>

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

<span
style={{cursor:"pointer"}}
onClick={()=>setShowContact(true)}
>
Contact
</span>

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
    maxWidth: "90%",
    margin: "0 auto",
    wordBreak: "break-word",
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

      <div className="category-section">

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
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "5px" }}>
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



{/* WHY CHOOSE US */}

<div className="why-section">

<h2
style={{
textAlign:"center",
fontSize:"32px",
letterSpacing:"3px",
marginBottom:"40px"
}}
>
WHY CHOOSE US
</h2>

<div className="why-scroll">

{/* CARD 1 */}

<div className="why-card">

<img src={price} alt="price"/>

<h3>Unbeatable Prices</h3>

<p>Fashion starting from ₹999</p>

</div>


{/* CARD 2 */}

<div className="why-card">

<img src={quality} alt="quality"/>

<h3>Premium Quality</h3>

<p>Superior fabrics & stitching</p>

</div>


{/* CARD 3 */}

<div className="why-card">

<img src={trust} alt="trust"/>

<h3>Trusted Brand</h3>

<p>Serving customers for 20+ years</p>

</div>

</div>

</div>


      {/* FEATURED COLLECTIONS */}

<div className="featured-section" ref={featuredRef}>
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

      <div className="reviews-section">

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

<div
className="footer-section"
style={{
background: "#ff4f7a",
color: "white"
}}
>

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
              📞 +91 9302286656
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
          © 2026 STYLE LOFT. All rights reserved.
        </div>

      </div>

{/* ABOUT US POPUP */}
{/* WHATSAPP BUTTON */}

<a
href="https://wa.me/919302286656"
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
{showContact && (
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
        maxWidth: "500px",
        borderRadius: "10px",
        padding: "40px",
        position: "relative",
        textAlign: "center"
      }}
    >

      <button
        onClick={() => setShowContact(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          fontSize: "18px",
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

      <h2 style={{marginBottom:"25px"}}>Contact Us</h2>

      <p>📍 22, Main Street, Mhow, MP, India 453441</p>
      <p>📞 +91 9302286656</p>
      <p>✉ newport4056@gmail.com</p>

    </div>
  </div>
)}
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
      overflowY: "auto",
      overflowX: "hidden",
      zIndex: 1000,
      padding: "40px 0"
    }}
  >
<div
style={{
background: "white",
width: "92%",
maxWidth: "700px",
margin: "0 auto",
maxHeight: "90vh",
borderRadius: "10px",
overflowY: "auto",
overflowX: "hidden",
position: "relative",
padding: "30px"
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

<div className="popup-content">
<AboutUs close={() => setShowAbout(false)} />
</div>

    </div>
  </div>
)}

{showPrivacy && <PrivacyPolicy close={() => setShowPrivacy(false)} />}
{showTerms && <TermsConditions close={() => setShowTerms(false)} />}
    </div>


  );
}

export default App;
