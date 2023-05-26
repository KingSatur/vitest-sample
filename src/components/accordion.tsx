import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion(props: AccordionProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Close" : "Open"}
        </button>
      </div>
      {show && <div>{props.children}</div>}
    </div>
  );
}
