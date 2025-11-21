import { useState } from "react";
export default function AppV1() {
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

          <p className="message">
            a Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={onPrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
