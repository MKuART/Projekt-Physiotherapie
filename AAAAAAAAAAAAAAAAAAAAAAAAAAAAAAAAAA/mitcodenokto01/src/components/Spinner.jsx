import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Spinner() {
  return <FontAwesomeIcon icon={faSpinner} spin />;
}

export default Spinner;

// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome