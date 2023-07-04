import React, { forwardRef } from "react";
import Resume from "./resume";

const ComponentToPrint = forwardRef((props, ref) => (
  <div ref={ref}>
    <Resume />
  </div>
));

export default ComponentToPrint;
