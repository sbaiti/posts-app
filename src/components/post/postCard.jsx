import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { yellowColor } from '../../assets/sass/style.scss'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "1vh",
        height: "20vh",
        '&:hover': {
            background: yellowColor,
            cursor: "pointer"
        },
    }
});

const PostCard = ({ post, history }) => {
    const classes = useStyles();
    return (
        <Card
            className={classes.root}
            onClick={() => history.push({
                pathname: `/post/${post.id}/comments`,
                state: { post },
            })}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center", fontStyle: "italic" }}>
                    {
                        post.title
                    }
                </Typography>
            </CardContent>
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.object,
    history: PropTypes.object
};

export default (PostCard);