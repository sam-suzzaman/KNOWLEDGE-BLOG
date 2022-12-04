import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

// For the theme
const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const QuillForm = ({ getQuillFormValue }) => {
    // const handler = (value, delta, source, editor) => {
    //     const text = editor.getText(value);
    //     console.log(text);
    //     getQuillFormValue(value);
    // };
    return (
        <div>
            <ReactQuill
                modules={modules}
                theme="snow"
                placeholder="Content goes here..."
                onChange={(value) => getQuillFormValue(value)}
            />
        </div>
    );
};

export default QuillForm;
