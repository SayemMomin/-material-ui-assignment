import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';


const Post = (props) => {
    const {title, id} = props.post
    const history = useHistory();

const handleBtn = (userId) => {    
    history.push(`/post/${userId}`);
}


const useStyles = makeStyles({
    root: {
        flexGrow: 1, 
      maxWidth: 700,
    },
    media: {
      height: 140,
    },
   
  });
  const classes = useStyles();

    return (
        <div className="post-container">  
        <Card className={classes.root}>
        <CardActionArea>   
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <span style={{ color: 'blue' }}>Title</span>: {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                ID No. {id}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={() => handleBtn(id)} variant="contained" color="primary">
            SEE MORE
            </Button>
        </CardActions>    
        </Card>  
        </div>
       
    );
};

export default Post;