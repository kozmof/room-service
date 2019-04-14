import * as React from "react";
import * as ReactDom from "react-dom";
import { TestEditor } from "./editor/TestEditor";

ReactDom.render(
  <TestEditor />,
  document.getElementById("main")
);
