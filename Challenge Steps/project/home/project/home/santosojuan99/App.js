import "./styles.css";
import { useState } from "react";

export default function App() {
  function onAddStep() {
    setStep((s) => s + 1);
  }
  function onMinusStep() {
    setStep((s) => s - 1);
  }

  const [steps, setStep] = useState(1);
  return (
    <div className="App">
      <button onClick={() => onMinusStep()}>-</button>Step: {steps}
      <button onClick={() => onAddStep()}>+</button>
      <Counter step={steps} />
    </div>
  );
}
function Counter({ step }) {
  // tanggal mulai (default: 2025-01-01, bisa diganti)
  const [startDate, setStartDate] = useState("2027-06-21");

  function AturDate({ startDate, count }) {
    // Buat date dari input user
    const date = new Date(startDate);
    date.setDate(date.getDate() + count); // tambahkan hari

    // Format tanggal
    const hari = date.toLocaleDateString("en-US", { weekday: "short" });
    const bulan = date.toLocaleDateString("en-US", { month: "short" });
    const tanggal = date.getDate();
    const tahun = date.getFullYear();
    return (
      <>
        {hari} {bulan} {tanggal} {tahun}
      </>
    );
  }

  function onAddCount(jarak) {
    setCount((s) => s + jarak);
  }
  function onMinusCount(jarak) {
    setCount((s) => s - jarak);
  }
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => onMinusCount(step)}>-</button>Count: {count}
      <button onClick={() => onAddCount(step)}>+</button>
      <br />
      {count === 0
        ? "Today is "
        : count > 0
        ? `${count} days from today is `
        : `${Math.abs(count)} day ago was `}
      {/* {`${count == 0 ? "Today is " : ""}`}
      {`${count > 0 ? count + " days from today is " : ""}`}
      {`${count < 0 ? count * -1 + " days ago was " : ""}`} */}
      <AturDate startDate={startDate} count={count} />
    </div>
  );
}
