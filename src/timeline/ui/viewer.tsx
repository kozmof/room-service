import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TimeLine, TimeData, TimeContent } from '../timeline';

interface TimeLineVierProps<T extends TimeContent> {
  timeline: TimeLine<T>;
}

export const TimeLineViewer = <T extends TimeContent>(props: TimeLineVierProps<T>) => {
  const lists = props.timeline.data.map(
    (item: TimeData<T>) => {
      return (
        <li>
          <div>
             { item.date.toDateString() }: { item.content.detail }
          </div>
        </li>
      );
    }
  );

  return(
    <div>
      <ul>
        { lists }
      </ul>
    </div>
  );
}