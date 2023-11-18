import { useRef } from "react";
import "./style.css";

const CardNumber = () => {
  const cardInputRefs = [useRef(), useRef(), useRef(), useRef()];
  const buttonRef = useRef();

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 4 && index < 3) {
      cardInputRefs[index + 1].current.focus();
    }

    if(value.length === 4 && index === 3) {
      buttonRef.current.focus();
    }
  };

  return (
    <div className="container">
      <p>Vložte číslo vaší kreditní karty:</p>
      <div className="credit-card-input">
        
        {cardInputRefs.map((cardInputRef, index) => (
          <input
            className={`cardInputRef_${index}`}
            ref={cardInputRef}
            type="text"
            maxLength="4"
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
        
        <button ref={buttonRef}>Odeslat</button>

      </div> 
    </div>
  );
};

export default CardNumber;
