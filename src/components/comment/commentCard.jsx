import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "1vh",
        height: "20vh",
        overflow: "auto"
    }
});

const CommentCard = ({ comment, history }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Email : {
                        comment.email
                    }
                </Typography>
                <Typography variant="h6" component="h5">
                    Name: {
                        comment.name
                    }
                </Typography>
                <Typography component="h6">
                    Body: {
                        comment.body
                    }
                </Typography>
            </CardContent>
        </Card>
    );
};

CommentCard.propTypes = {
    comment: PropTypes.object,
};

export default (CommentCard);