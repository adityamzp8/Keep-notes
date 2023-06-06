import React, { Fragment } from 'react';
import classes from './Note.module.css';

const Note = props => {

    const removeNote = event => {
        props.onDelete(props.id);
        event.preventDefault();
    }

    return (
        <div className={classes.note}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={removeNote}>Delete</button>
        </div>
    );
}

export default Note; 