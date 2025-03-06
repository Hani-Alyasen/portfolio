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
            revealDirection="start"
          />
        </h1>

        <p> <DecryptedText
            text="Building the Future with Cutting-Edge Technology "
            animateOn="view"
            revealDirection="start"
            speed={95}
          />
         </p>
      
      </div>
    </section>
  );
}

export default Hero;
