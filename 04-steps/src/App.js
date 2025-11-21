import { useState } from "react";
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
      {/*ketika kita memiliki 2 component yang berbeda, mereka tidak akan saling terhubung meski functionnya sama */}
    </div>
  );
}
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1); //state ini jangan ditaruk didalam function atau if karena itu hanya akan berlaku didalam if atau function itu saja. Kalau ditaruk luar, dia bisa bersifat lebih global
  // const [test, setTest] = useState({ name: "Juan" });
  const [isOpen, setIsOpen] = useState(true);

  function onPrevious() {
    // if (step > 1) setStep(step - 1);
    // if (step > 1) setStep(step - 1);//kalau dijalanin dua kali maka return nya cuma -1, tidak -2
    if (step > 1) setStep((s) => s - 1); //ini baru ada callback, kalau diberi 2 kali maka akan menjadi -2
  }

  function onNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
    //BAD PRACTICE KARENA REACT BEKERJA DALAM IMMUTABLE
    // test.name = "Fred";
    //GOOD PRACTICE
    // setTest({ name: "David" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={onPrevious}>
              👈<span>Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={onNext}>
              <span>Next</span>👉
              {/*children itu mengambil bagian ini, ketika function dipanggil */}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
  function Button({ bgColor, textColor, onClick, children }) {
    //button disini itu mengambil segala sesuatu yang ada antara element buka dan tutup diatas
    return (
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  function StepMessage({ step, children }) {
    //nama function harus diawali dengan huruf besar
    return (
      <div class="message">
        <h3>Step {step}:</h3>
        {children}
      </div>
    );
  }
}
