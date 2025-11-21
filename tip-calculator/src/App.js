import { useState } from "react";
export default function App() {
  const [totalBill, setTotalBill] = useState("");
  const [addBill1, setAddBill1] = useState(0);
  const [addBill2, setAddBill2] = useState(0);

  const additionalBillTotal = Math.round(
    totalBill * ((addBill1 + addBill2) / 200)
  );
  const endBill = Number(totalBill) + Number(additionalBillTotal);
  function handleReset() {
    setTotalBill("");
    setAddBill1(0);
    setAddBill2(0);
  }
  return (
    <div>
      <Question QuestionText="How much was the bill?" />
      <input
        type="number"
        onChange={(e) => setTotalBill(e.target.value)}
        value={totalBill}
      ></input>
      <br />
      <QuestionAnswer tip={addBill1} onSelected={setAddBill1}>
        How did you like the service?
      </QuestionAnswer>
      <QuestionAnswer tip={addBill2} onSelected={setAddBill2}>
        How did your friend like the service?
      </QuestionAnswer>
      <h3>
        {totalBill !== ""
          ? `You pay $${endBill} ($${totalBill} + $${additionalBillTotal} tip)`
          : ""}
      </h3>
      {totalBill !== "" ? <button onClick={handleReset}>Reset</button> : ""}
    </div>
  );
}

function Question({ QuestionText }) {
  return <label>{QuestionText}</label>;
}
function QuestionAnswer({ onSelected, tip, children }) {
  return (
    <>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSelected(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
      <br />
    </>
  );
}
