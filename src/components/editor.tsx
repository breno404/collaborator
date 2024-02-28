import { useEffect, useRef, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "@/styles/codemirror.css";
import CodeMirror from "codemirror";

function Editor() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/abc.json").then(async (result) => {
      const j = await result.json();
      setContent(JSON.stringify(j));
    });
  }, []);

  useEffect(() => {
    let mirror: CodeMirror.EditorFromTextArea | null = null;
    if (
      textAreaRef != null &&
      textAreaRef.current instanceof HTMLTextAreaElement
    )
      mirror = CodeMirror.fromTextArea(textAreaRef.current, {
        autocorrect: true,
        autofocus: true,
        lineNumbers: true,
        indentUnit: 2,
        indentWithTabs: true,
        smartIndent: true,
        spellcheck: true,
        theme: "dracula",
      });

    return () => {
      if (mirror != null) mirror.toTextArea();
    };
  }, [textAreaRef, content]);

  return (
    <textarea
      ref={textAreaRef}
      name="codeEditor"
      id="codeEditor"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    >
      {content}
    </textarea>
  );
}

export default Editor;
