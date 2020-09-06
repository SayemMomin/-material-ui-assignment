import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  './PostDetail.css';



const PostDetails = () => {
    const {userId} = useParams();
    const [postDetails, setPostDetails] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPostDetails(data)
        })
    }, [])

    const useStyles = makeStyles({
        root: {
          maxWidth: 700,
        },
        media: {
          height: 140,
        },
      });
      const classes = useStyles();

    const {title, body} = postDetails
    return (
    <div className="postDetail-container">
        <h2>Post Details</h2>
        <Card className={classes.root}>
        <CardActionArea>   
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <span style={{ color: 'blue' }}>Title</span>: {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ color: 'blue' }}>Description</span> :{body}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
    );
};

export default PostDetails;