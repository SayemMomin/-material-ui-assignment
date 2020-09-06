import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import imgData from '../../FakeData/ImageData';

const CommentDetail = (props) => {
    console.log(imgData)
    const imgData1 = imgData.slice(0, 1)
    const [img] = useState(imgData1)
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          overflow: 'hidden',
          padding: theme.spacing(0, 3),
        },
        paper: {
          maxWidth: 400,
          margin: `${theme.spacing(1)}px auto`,
          padding: theme.spacing(2),
        },
      }));
      const classes = useStyles();
    const {name, email, body} = props.comment
    const style={
        color: 'blue'
    }
    return (
        <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {/* .....................Profile Image......... */}
          {img.map((comment =>                        
                       <Avatar src={comment.img} alt="Remy Sharp"/>))}  
          </Grid>
          <Grid item xs>
            <Typography > 
            <i style={style}>Name</i>: {name} <br></br>
            <i style={style}>Email</i>: {email} <br></br>
            <i style={style}>Comment</i>: {body}
            </Typography>
          </Grid>        
        </Grid>        
      </Paper>
    </div>
    );
};

export default CommentDetail;