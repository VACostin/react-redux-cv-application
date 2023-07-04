import React, { useRef } from "react";
import { Provider } from "react-redux";
import { useReactToPrint } from "react-to-print";
import store from "./store";
import { Form, ComponentToPrint } from "./content-components";
import "Styles/content.css";

export default function Content() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <Provider store={store}>
      <div id="content">
        <Form handlePrint={handlePrint} />
        <ComponentToPrint ref={componentRef} />
      </div>
    </Provider>
  );
}

// <Resume props={props} />
