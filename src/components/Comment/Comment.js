import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgData from '../../FakeData/ImageData';
import CommentDetail from '../CommentDetail/CommentDetail';


const Comment = () => {
    console.log(imgData)
    const imgData1 = imgData.slice(0, 1)
    const [img] = useState(imgData1)
    const {userId} = useParams()
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setComments(data)
        })
    }, [])


    return (
        <div >
            <h2>{comments.length} Comments </h2>
            <h3>Comment Details....</h3>
            {
                comments.map((comment => <CommentDetail comment={comment} ></CommentDetail> ))
               
            }                   
        </div>

    );
};

export default Comment;