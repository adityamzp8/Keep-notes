import React, { Fragment, useState } from 'react';
import classes from './NoteInput.module.css';

const NoteInput = props => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitNote = event => {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault();
    }

    return (
        <Fragment>
            <form className={classes.form}>
                <input name="title" onChange={handleChange} placeholder='Title' value={note.title} />
                <textarea name="content" onChange={handleChange} value={note.content} cols="30" rows="10" placeholder='Take a note...' />
                <button onClick={submitNote}>Add</button>
            </form>
        </Fragment>
    );
}

export default NoteInput; 