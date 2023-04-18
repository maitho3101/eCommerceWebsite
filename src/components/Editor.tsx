import dynamic from "next/dynamic";
import { Grid, Box } from "@mui/material";
import {Button} from "@mui/material";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useLayoutEffect, useRef, useState, useMemo } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = (props: any) => {
  const [value, setValue ] = useState('');
  const firstRender = useRef(true);
  const print = (e: any) => {
    //console.log(e);
    setValue(e);
  }
  /*
  useLayoutEffect(() => {
    if (content !== '') {
      console.log(content);     
    }  
  }, [content])
  const save = () => {
   setContent(value);
  }
  
  const Preview = () => {
    return (
      <div dangerouslySetInnerHTML={{__html: content}}/>
    )
  }
  */
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  
  const editorRef = useRef(null);
  return (
    <Box>
      <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
      <Button>Tạo</Button>
      <Box sx={{width: '100%', height: '700px', border: '2px solid black'}}>
      </Box>
    </Box>
  );
};
export default TextEditor;

