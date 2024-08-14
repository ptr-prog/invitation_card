import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import rules from "../../assets/img/dodont.png";
import menu from "../../assets/img/slider2.png";
import greeting from "../../assets/img/greetings.png";
import Celebrating from "../../assets/img/pict2.png";
import hellokity from "../../assets/img/kitty.gif";
import button1 from "../../assets/img/btnlokasi.png";
import dress from "../../assets/img/dresscode.png";
import location from "../../assets/img/location.png";
import chat from "../../assets/img/chat.png";
import rsvp from "../../assets/img/rsvp.png";
import music from "../../assets/img/music_on.png";
import song from "../../assets/img/audio.mp3";
import "./form.css";
import Spinner from "./Spinner";
import SuccessNotification from "./SuccessNotification";

const Form = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [rsvpStatus, setRsvpStatus] = useState("");
  const [foodChoice, setFoodChoice] = useState("");
  const [drinkChoice, setDrinkChoice] = useState("");
  const [fullName, setFullName] = useState("");
  const images = [menu, rules];
  const [isPlaying, setIsPlaying] = useState(false);
  const particleContainerRef = useRef(null);
  const celebratingRef = useRef(null);
  const rsvpRef = useRef(null);
  const wishesRef = useRef(null);
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRsvpChange = (e) => {
    setRsvpStatus(e.target.value);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(
        "http://localhost:5000/api/transaction",
        {
          userName: fullName,
          isAttending: rsvpStatus,
          food: rsvpStatus === "yes" ? foodChoice : null,
          drink: rsvpStatus === "yes" ? drinkChoice : null,
        }
      );
  
      if (response.status === 201) {
        setShowSuccess(true); 
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was an error submitting your RSVP.");
    } finally {
      setLoading(false); 
    }
  };
  
  
  const createParticles = () => {
    const container = particleContainerRef.current;
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

       
      const size = Math.random() * 10 + 5; 
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;

       particle.style.setProperty("--x", Math.random() * 2 - 1);
      particle.style.setProperty("--y", Math.random() * 2 - 1);

      container.appendChild(particle);
    }
  };

  useEffect(() => {
    createParticles();
    return () => {
      const container = particleContainerRef.current;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  const closeNotification = () => {
    setShowSuccess(false);  
  };

  return (
    <div className="form-container">
        {loading && <Spinner />}
        {showSuccess && <SuccessNotification onClose={closeNotification} />}
      <div className="particle-container" ref={particleContainerRef}>
        {" "}
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      <audio ref={audioRef} src={song} loop />

      <div className="bg-image">
        <div className="bg-overlay"></div>
      </div>
      <div className="side-buttons-sound">
        <button className="icon-button" onClick={toggleMusic}>
          <img src={music} alt="Music toggle" className="icon-image" />
        </button>
      </div>
      <div className="side-buttons">
        <button
          className="icon-button"
          onClick={() => scrollToSection(celebratingRef)}
        >
          <img src={location} alt="Location" className="icon-image" />
        </button>
        <button
          className="icon-button"
          onClick={() => scrollToSection(rsvpRef)}
        >
          <img src={rsvp} alt="RSVP" className="icon-image" />
        </button>
        <button
          className="icon-button"
          onClick={() => scrollToSection(wishesRef)}
        >
          <img src={chat} alt="Chat" className="icon-image" />
        </button>
      </div>

      <div className="form-content">
        <div className="bg-card">
          <div className="image-slider">
            <img
              src={images[currentImage]}
              alt="Slider"
              className="slide-image"
              style={{ width: "615px" }}
            />
          </div>
          <div className="flex justify-center items-center mt-20 mb-20 ">
            <div className="card rounded-xl shadow-lg p-6 max-w-sm text-center">
              <h1
                className="text-2xl font-cursive mt-2 mb-4"
                style={{ fontFamily: "Imperial Script, cursive" }}
              >
                Greetings
              </h1>
              <img src={greeting} alt="Greeting" className="mx-auto mb-4" />
            </div>
          </div>
          <div
            ref={celebratingRef}
            className="flex justify-center items-center mb-20 "
          >
            <div className="card rounded-xl shadow-lg p-6 max-w-sm text-center">
              <h1
                className="text-2xl font-cursive mt-2 mb-4"
                style={{ fontFamily: "Imperial Script, cursive" }}
              >
                Celebrating
              </h1>
              <img
                src={hellokity}
                alt="Celebrating"
                className="mx-auto w-40 mt-10 mb-4"
              />
              <img
                src={Celebrating}
                alt="Celebrating"
                className="mx-auto mb-4"
              />
              <a href="https://maps.app.goo.gl/C5RRM4gBrHe3gYA3A">
                <img
                  src={button1}
                  alt="Location Button"
                  className="mx-auto w-40 mb-4"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center mb-20 ">
            <div className="card rounded-xl shadow-lg p-6 max-w-sm text-center">
              <h1
                className="text-2xl font-cursive mt-2"
                style={{ fontFamily: "Imperial Script, cursive" }}
              >
                Dress Code
              </h1>
              <img
                src={dress}
                alt="Dress Code"
                className="mx-auto px-16 mt-5 mb-4"
              />
            </div>
          </div>
          <div
            ref={rsvpRef}
            className="flex justify-center items-center mb-20 "
          >
            <div className="card rounded-xl shadow-lg p-6 px-24 max-w-sm text-center flex flex-col items-center">
              <h1
                className="text-2xl font-cursive mt-2 mb-2"
                style={{ fontFamily: "Imperial Script, cursive" }}
              >
                RSVP
              </h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-64 p-2 rounded-lg mt-5 border border-gray-300"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <select
                  className="w-64 p-2 rounded-lg mt-5 border border-gray-300"
                  onChange={handleRsvpChange}
                  value={rsvpStatus}
                  required
                >
                  <option value="">Will you attend?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {rsvpStatus === "yes" && (
                  <>
                    <h1
                      className="text-1xl font-cursive mt-5"
                      style={{ fontFamily: "poppins" }}
                    >
                      FOOD MENU
                    </h1>
                    <select
                      className="w-64 p-2 rounded-lg mt-5 border border-gray-300"
                      onChange={(e) => setFoodChoice(e.target.value)}
                      value={foodChoice}
                      required
                    >
                      <option value="">Select Food</option>
                      <option value="Bakmi Ayam Jamur Bakso">
                        Bakmi Ayam Jamur Bakso
                      </option>
                      <option value="Chicken Rice Bowl teriyaki">
                        Chicken Rice Bowl Teriyaki
                      </option>
                      <option value="Chicken Rice Bowl yakiniku">
                        Chicken Rice Bowl Yakiniku
                      </option>
                      <option value="Chicken Rice Bowl blackpepper">
                        Chicken Rice Bowl Blackpepper
                      </option>
                      <option value="Chicken Rice Bowl creamy sauce">
                        Chicken Rice Bowl Creamy sauce
                      </option>
                      <option value="Chicken Rice Bowl sambal matah">
                        Chicken Rice Bowl Sambal matah
                      </option>
                      <option value="Chicken Rice Bowl sambal bawang">
                        Chicken Rice Bowl Sambal bawang
                      </option>
                      <option value="Nasi Goreng Ayam">Nasi Goreng Ayam</option>
                      <option value="Smoked Beef Aglio e Olio">
                        Smoked Beef Aglio e Olio
                      </option>
                      <option value="Chicken Aglio e Olio">
                        Chicken Aglio e Olio
                      </option>
                      <option value="Beef Bolognaise">Beef Bolognaise</option>
                      <option value="Chicken Creamy Sauce">
                        Chicken Creamy Sauce
                      </option>
                    </select>
                    <h1
                      className="text-1xl font-cursive mt-5"
                      style={{ fontFamily: "poppins" }}
                    >
                      DRINK MENU
                    </h1>
                    <select
                      className="w-64 p-2 rounded-lg mt-5 border border-gray-300"
                      onChange={(e) => setDrinkChoice(e.target.value)}
                      value={drinkChoice}
                      required
                    >
                      <option value="">Select Drink</option>
                      <option value="Ice Lychee Tea">Ice Lychee Tea</option>
                      <option value="Ice Lemon Tea">Ice Lemon Tea</option>
                      <option value="Ice Black Tea">Ice Black Tea</option>
                    </select>
                  </>
                )}
                <button
                  type="submit"
                  className="mt-6 mb-4 bg-pink-700 px-24 py-1 rounded-xl text-white"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          <div
            ref={wishesRef}
            className="flex justify-center items-center mb-20"
          >
            <div className="card rounded-xl shadow-lg p-6 px-4 max-w-sm text-center flex flex-col items-center">
              <h1
                className="text-2xl font-cursive mt-2 mb-2"
                style={{ fontFamily: "Imperial Script, cursive" }}
              >
                Send Your Wishes
              </h1>
              <input
                type="text"
                placeholder="Full Name"
                className="w-64 p-2 rounded-lg mt-5 border border-gray-300"
              />
              <textarea className="w-64 p-2 rounded-lg mt-5 border border-gray-300"></textarea>
              <a
                href=""
                className="mt-6 mb-4 bg-pink-700 px-24 py-1 rounded-xl text-white"
              >
                SEND
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="card rounded-xl shadow-lg p-6 px-4 mb-36 max-w-sm text-center flex flex-col items-center">
              <h1
                className="text-2xl font-cursive mt-2 mb-96"
                style={{ fontFamily: "Imperial Script, cursive" }}
              >
                Best Wish
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
