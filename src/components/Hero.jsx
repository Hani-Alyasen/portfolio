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

        <p> <DecryptedText
            text="Building the Future with Cutting-Edge Technology "
            animateOn="view"
            revealDirection="center"
          />
         </p>
      
      </div>
    </section>
  );
}

export default Hero;
