import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text:"Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text:"Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  }
];

export default function App() {
  // const [curOpen, setIsOpen] = useState(null)
  return (
    <div>

      <Accordion  data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  const [curOpen, setIsOpen] = useState(0)
  return <div className="accordion">
    {data.map((el, i) => <AccordionItem curOpen={curOpen} onOpen={setIsOpen} key = {i} num={i} title={el.title}>{el.text}</AccordionItem>
    )}
  </div>;
}
function AccordionItem({num, title, text, curOpen, onOpen, children}){
  const isOpen = num === curOpen
  function handleIsOpen(){
    onOpen(isOpen? null: num)
  }
  return <div className={isOpen ? "open item": "item" } onClick={handleIsOpen}>
    <p className={isOpen ? "open number" : "number"}>{num > 9 ? `0${num+1}`: num+1}</p>
    <p className="text">{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>
    {isOpen && <div className="content-box">
      {children}
    </div>}
  </div>
}