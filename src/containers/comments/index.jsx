import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import styled from "styled-components";
import getCommentsActions from "../../redux/comments/getComments";
import CommentCard from '../../components/comment/commentCard';
import ButtonComponent from '../../components/ui/button'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
    },
}));

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-style:italic;
  text-decoration: underline;
  padding:10px;
`;

const Body = styled.p`
 margin-top:2em;
 font-size: 1em;
 padding:10px;
`;

const SubTitle = styled.h4`
font-size: 1.5em;
color: palevioletred;
font-style:italic;
text-decoration: underline;
padding-left:10px;
`;

const ListCommentsPost = ({ history, getCommentsReq, allComments, addedComment }) => {
    const classes = useStyles();
    const [commentsData, setComments] = useState(null);
    const [currentPost, setCurrentPost] = useState(history?.location?.state?.post ?? null)

    /*hooks*/

    useEffect(() => { getCommentsReq({ idPost: currentPost?.id }) }, []);
    useEffect(() => {
        setComments(allComments)
    }, [allComments, addedComment])

    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                <Title>
                    {currentPost.title}
                </Title>
                <Body>
                    {currentPost.body}
                </Body>
                <SubTitle> List Comments : </SubTitle>
                <Grid container>
                    {
                        commentsData && commentsData.map((comment, index) => (
                            <Grid item sm={12} md={6} key={index}>
                                <CommentCard comment={comment} />
                            </Grid>
                        ))
                    }
                    {
                        addedComment && addedComment.map((comment, index) => (
                            <Grid item sm={12} md={6} key={index}>
                                <CommentCard comment={comment} />
                            </Grid>
                        ))
                    }
                </Grid>
                <div className=" p-4 text-center ">
                    <ButtonComponent
                        color="secondary"
                        type="contained"
                        label="Add Comment"
                        size="large"
                        clicked={() => {
                            history.push({
                                pathname: `/addComment/${currentPost.id}`,
                                state: { currentPost },
                            })
                        }}
                    />
                </div>
            </Paper>
        </div>
    );
};

ListCommentsPost.propTypes = {
    getCommentsReq: PropTypes.func,
    history: PropTypes.object,
    allComments: PropTypes.array,
    addedComment: PropTypes.array
};

const mapStateToProps = ({ comments }) => {
    return {
        allComments: comments.getComments.response,
        addedComment: comments.addComment.commentArr
    }
}

const mapDispatchToProps = dispatch => ({
    getCommentsReq: paylaod => dispatch(getCommentsActions.getCommentsRequest(paylaod))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCommentsPost);