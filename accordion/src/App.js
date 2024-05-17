import { useState } from "react";
import "./App.css";

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
  return (
    <div className="w-[700px] mx-auto my-24 flex flex-col gap-6">
      {data.map((faq, num) => (
        <AccordionItem number={num} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
}

function AccordionItem({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div
      className={`px-6 py-5 pr-12 cursor-pointer border-y-4 border-y-[#fff] grid gap-x-6 gap-y-8 items-center grid-cols-[auto_1fr_auto] shadow-[0_0_30px_rgba(0,0,0,0.1)]  ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p
        className={`${isOpen ? "text-[#087f5b]" : "text -[#ced4da]"} text-2xl font-medium`}
      >
        {number < 9 ? `0${number}` : number + 1}
      </p>
      <p className="title">{title}</p>
      <p className="icon"> {isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
