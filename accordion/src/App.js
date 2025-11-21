import "./style.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map(
        (
          el,
          i //i disini adalah index, dimulai dari 0. itu hyperparameter yang didapat dari map
        ) => (
          <AccordionItem
            title={el.title}
            num={i}
            key={el.title}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {el.text}
          </AccordionItem>
        )
      )}
    </div>
  );
}
function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen; //ketika yang dipilih indexnya tidak dibuka, maka false (tidak terbuka)
  // sehingga dia mencari yang akan dibuka dengan mendengarkan fungsi onOpen yang ada di handleToggle.
  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num); //set yang buka itu yang indexnya dipilih
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
