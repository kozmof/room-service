import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import CssBaseLine from '@material-ui/core/CssBaseline/CssBaseline'

export const MainFrame = () => {
  const useStyles = makeStyles(
    {
      'mainFrame': {

      },

      'appBar': {
        'flexGrow': 1,
        'background': '#263238'
      }
    }
  )

  const classes = useStyles({});

  return(
    <div className={classes.mainFrame}>
      <CssBaseLine />
      <AppBar className={classes.appBar} position="static">
        <ToolBar>
          Test
        </ToolBar>
      </AppBar>
    </div>
  );
};