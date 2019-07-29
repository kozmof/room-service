import * as React from "react";
import * as ReactDom from "react-dom";
import { TestEditor } from "./editor/TestEditor";
import { EvaluationChip, EvaluationProps } from "./evaluation_chip/ui/EvaluationChip";

const props: EvaluationProps = {
  evaluationType: "7x7",
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
    <h1>
      Evaluation Chip
    </h1>
    <div>
      <EvaluationChip {...props} />
    </div>
  </div>,
  document.getElementById("main")
);
