import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextArea from '../ui/textarea'
import InputText from "../ui/input"
import { formElments } from './inputs'

const Form = ({
    payload,
    fieldChangedHandler,
}) => {

    return (
        <Fragment>
            <h2 className="text-center">
                Add Comment
            </h2>
            <div>
                {formElments
                    .filter(el => el)
                    .map((el, index) => (
                        el.type === "textArea" ?
                            <TextArea
                                key={`${el.name}${index}`}
                                onchange={e => fieldChangedHandler(e, el.name)}
                                name={el.name}
                                label={el.label}
                                placeholder={el.placeholder}
                                type={el.type}
                                value={payload[el.name]}
                                required={el.required}
                            /> :
                            <InputText
                                key={`${el.name}${index}`}
                                onchange={e => fieldChangedHandler(e, el.name)}
                                name={el.name}
                                label={el.label}
                                placeholder={el.placeholder}
                                type={el.type}
                                value={payload[el.name]}
                                required={el.required}
                            />
                    ))}
            </div>
        </Fragment>
    )
}

Form.propTypes = {
    payload: PropTypes.object.isRequired,
    fieldChangedHandler: PropTypes.func.isRequired
}
export default Form

