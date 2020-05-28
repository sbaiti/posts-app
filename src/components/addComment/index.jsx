import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { Modal, makeStyles, Fade, Backdrop } from '@material-ui/core';
import ButtonComponent from '../../components/ui/button'
import { useFormFields } from '../../customHooks/useFormFields'
import Form from './form'
import addCommentActions from "../../redux/comments/addComment"

const useStyles = makeStyles((theme) => ({
    modal: {
        width: "70%",
        margin: "auto",
        paddingTop: "20vh",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const AddComment = ({ history, addCommentFct }) => {
    const classes = useStyles();

    /* hooks */
    const [open, setOpen] = React.useState(true);
    const [fields, fieldChangedHandler] = useFormFields({
        body: "",
        name: "",
        email: ""
    });

    /* functions */
    const handleClose = () => {
        setOpen(false);
    };

    const addCommentFn = () => {
        const id = history?.location?.state?.currentPost?.id;
        addCommentFct({ ...fields, postId: id })
        history.push({
            pathname: `/post/${id}/comments`,
            state: { post: history?.location?.state?.currentPost },
        })
    }
    const { name, email, body } = fields;
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Form
                            payload={fields}
                            fieldChangedHandler={fieldChangedHandler}
                        />
                        <div className="mt-4">
                            <ButtonComponent
                                disabled={body === "" || email === "" || name === ""}
                                color="secondary"
                                type="contained"
                                size="large"
                                width="100%"
                                label="Add"
                                clicked={addCommentFn}
                            />
                        </div>
                    </div>
                </Fade>

            </Modal>
        </div>
    );
};

AddComment.propTypes = {
    history: PropTypes.object,
    addCommentFct: PropTypes.func
};

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = dispatch => ({
    addCommentFct: paylaod => dispatch(addCommentActions.addComment(paylaod))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);