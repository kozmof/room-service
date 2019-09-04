import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TimeLine, TimeData, TimeContent } from '../timeline';

interface TimeLineVierProps<T extends TimeContent> {
  timeline: TimeLine<T>;
}

export const TimeLineViewer = <T extends TimeContent>(props: TimeLineVierProps<T>) => {
  const useStyles = makeStyles(
    {

      list_line: {
        position: 'relative',
        margin: 0,
        paddingBottom: '1em',
        paddingLeft: '20px',

        '&:before': {
          backgroundColor: 'black',
          width: '2px',
          content: '""',
          position: 'absolute',
          top: '0px',
          bottom: '0px',
          left: '-12px'
        },

        '&:first-child': {
          '&:before': {
            top: '14px'
          }
        },

        '&:last-child': {
          '&:before': {
            height: '6px'
          }
        }
      }
    }
  );

  const classes = useStyles({});

  const lists = props.timeline.data.map(
    (item: TimeData<T>) => {
      return (
        <li className={classes.list_line}>
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