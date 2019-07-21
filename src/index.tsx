import * as React from "react";
import * as ReactDom from "react-dom";
import { TestEditor } from "./editor/TestEditor";
import { EvaluationChip, EvaluationProps } from "./evaluation_table/EvaluationChip";

const props: EvaluationProps = {
  evaluationType: "5x5",
  evaluationArg: {
    rank: {
      sourceRank: "A",
      infoRank: 3
    },
    lang: "EN"
  }
}

ReactDom.render(
  <div>
    <TestEditor />
    <EvaluationChip {...props} />
  </div>,
  document.getElementById("main")
);
