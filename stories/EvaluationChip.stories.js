import React from "react"
import { EvaluationChip, EvaluationProps } from '../src/evaluation_chip/ui/EvaluationChip';

export default {
  title: 'EvaluationChip',
  component: EvaluationChip,
};

export const EvaluationChipSt = () => {
  const props = {
    evaluationType: "7x7",
    evaluationArg: {
      rank: {
        sourceRank: "A",
        infoRank: 3
      },
      lang: "EN"
    }
  }
  return <EvaluationChip {...props} />
  }


EvaluationChipSt.story = {
  name: 'to Storybook',
};