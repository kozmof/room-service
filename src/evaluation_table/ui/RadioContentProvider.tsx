import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

export const provideContent = (signature: string, descriptionList: Array<string>) => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'flex-start'
    },

    sig: {
      width: '8px' 
    },

    ul: {
      listStyleType: 'disc' 
    }
  })

  const classes = useStyles({})

  const description = descriptionList.map(
    (item: string) => {
      return(
        <Typography variant="body2">
          <li>
            {item}
          </li>
        </Typography>
      )
    }
  )

  return(
    <List className={classes.root}> 
      <ListItem className={classes.sig}>
        <Typography variant="body1">
          {signature}
        </Typography>
      </ListItem>
      <ListItem>
        <ul className={classes.ul}>
          {description}
        </ul>
      </ListItem>
    </List>
  )
}
