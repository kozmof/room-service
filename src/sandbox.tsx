import * as React from 'react';
import { TestEditor } from './editor/TestEditor';
import { EvaluationChip, EvaluationProps } from './evaluation_chip/ui/EvaluationChip';
import { TimeLine, TimeData, TimeContent } from './timeline/timeline';
import { TimeLineViewer } from './timeline/ui/viewer';
import { tableParser } from './editor/markout/table/TableParser';
import { TableMarkout } from './editor/markout/table/TableMarkout';

export const Sandbox = () => {
  // --------------------------------------------
  // Evaluation Chip

  const evalProps: EvaluationProps = {
    evaluationType: "7x7",
    evaluationArg: {
      rank: {
        sourceRank: "A",
        infoRank: 3
      },
      lang: "EN"
    }
  }

  // --------------------------------------------
  // TimeLine

  const time_data1: TimeData<TimeContent> = {
    date: new Date(),
    content: {
      title: "Test Title 1",
      detail: "Test Detail 1"
    },
    dateType: "time"
  }

  const time_data2: TimeData<TimeContent> = {
    date: new Date(),
    content: {
      title: "Test Title 2",
      detail: "Test Detail 2"
    },
    dateType: "time"
  }

  const time_data3: TimeData<TimeContent> = {
    date: new Date(),
    content: {
      title: "Test Title 3",
      detail: "Test Detail 3"
    },
    dateType: "time"
  }

  const timeline: TimeLine<TimeContent> = new TimeLine([time_data1, time_data2, time_data3]);

  // --------------------------------------------
  // TableMarkout

  const text: string = "=\n: name\n: location\n=\n: Satoshi\n: Masara\n-\n: Shigeru\n: Masara\n-\n: Kasumi\n: Hanada\n-\n"
  const table: Array<Array<string>> = tableParser(text.split("\n"));

  // --------------------------------------------

  return(
    <div>
      <h1>
        Sandbox
      </h1>
      <div>
        <p> Evaluatin Chip </p>
        <EvaluationChip {...evalProps} />
        <p> Plain Editor </p>
        <TestEditor />
        <p> Time Line </p>
        <TimeLineViewer<TimeContent> timeline={timeline} />
        <p> Table </p>
        <div> raw text </div>
        <pre>{ text }</pre>
        <TableMarkout table={table} />
      </div>
    </div>
  )
}

