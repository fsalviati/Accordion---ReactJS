import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    index: "01",
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    index: "02",
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    index: "03",
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleClick = (index) => {
    if (openItem === index) setOpenItem(null);
    else {
      setOpenItem(index);
    }
  };

  return (
    <>
      {faqs.map((item) => (
        <AccordionItem
          key={item.index}
          title={item.title}
          text={item.text}
          itemNumber={item.index}
          open={openItem === item.index}
          handleClick={() => handleClick(item.index)}
        />
      ))}
    </>
  );
};

export default Accordion;
