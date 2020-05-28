import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import getAllPostsActions from "../../redux/posts/getAllPosts"
import SpinnerDot from "../../components/ui/spinner/spinnerDot"
import Post from "../../components/post/postCard";
import { Grid } from '@material-ui/core';

const Posts = ({ getAllPostsReq, allPosts, history }) => {
    const [postsData, setPosts] = useState(null);

    /*hooks*/

    useEffect(() => { getAllPostsReq() }, []);
    useEffect(() => {
        setPosts(allPosts)
    }, [allPosts])

    return (
        <Grid container>
            {
                postsData ? postsData.map((post, index) => (
                    <Grid item sm={12} md={6} lg={4} key={index}>
                        <Post post={post} history={history} />
                    </Grid>
                )

                ) : <SpinnerDot />
            }
        </Grid>
    );
};

Posts.propTypes = {
    getAllPostsReq: PropTypes.func,
    allPosts: PropTypes.array
};

const mapStateToProps = ({ posts }) => {
    return {
        allPosts: posts.getAllPosts.response
    }
}

const mpaDispatchToProps = dispatch => ({
    getAllPostsReq: () => dispatch(getAllPostsActions.getAllPostsRequest()),
})

export default connect(mapStateToProps, mpaDispatchToProps)(Posts);