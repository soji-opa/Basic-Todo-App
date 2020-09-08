import React, { useState } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({ title: " ", body: "" });
  // Step 3: Set up state for FORM stored in note object. Note this is separate from index.js 'notes'
  // Step 4: Set up onChange event when input text changes (similar to our onClick event used with buttons)
  // This uses https://reactjs.org/docs/events.html#form-events
  const handleChanges = (event) => {
    // console.log("value", event.target.value);
    const noteContent = { ...note, [event.target.name]: event.target.value };
    setNote(noteContent);
    // Step 5: Use text input value to update state

    // Step 12: Refactor inputs and handleChanges to use "name" in updating state
  };

  // Step 8: Create submit form function with addNewNote prop
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };
  // Step 13: Clear form onSubmit
  return (
    <form onSubmit={handleSubmit}>
      {/* Step 2: Add <label> with htmlFor & update <input> id to create relationship b/t input and label*/}
      {/* Step 1: Create a basic <form> with <input> type=text inside to set up HTML form */}

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Enter title"
        value={note.title}
        onChange={handleChanges}
      ></input>

      {/* Step 10: Setting Value with State in <input>*/}

      {/* Step 11: Add note <textarea> and update note state and  */}
      <label htmlFor="body"> Task </label>
      <textarea
        id="body"
        name="body"
        placeholder="Enter task content"
        onChange={handleChanges}
        value={note.body}
      ></textarea>
      {/* Step 9: Submit form with button and onSubmit */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NoteForm;
