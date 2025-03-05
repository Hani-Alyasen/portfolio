import React from "react";
import DecryptedText from "../text/DecryptedText";

function Hero() {
  return (
    <section className="hero-section">
      <div>
        <h1>
          <DecryptedText
            text="Welcome to Quantum Core "
            animateOn="view"
            revealDirection="center"
          />
        </h1>

        <p>Building the Future with Cutting-Edge Technology</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
