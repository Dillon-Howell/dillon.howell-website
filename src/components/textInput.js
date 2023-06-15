
import React, { useEffect, useState, useRef } from "react";
// 008c00

export const TextInput = ({onEnter, text, previousCommand}) => {
  const staticPost = previousCommand ? true : false;
  const [value, setValue] = useState(text);

  
  const flag = value.split(" ")[0] ? value.split(" ")[0] === "executing" ? true : false : false
  
  
  
  const [caret, setCaret] = useState("▊");
  const inputRef = useRef();


  // code to make the caret blink
    useEffect(() => {
        const interval = setInterval(() => {
            if (caret === "▊") {
                setCaret("");
            } else {
                setCaret("▊");
            }
        }, 500);
        return () => clearInterval(interval);
    }, [caret]);

    const handleEnter = (temp) => {
      onEnter(temp)
      setValue("")
      inputRef.current.textContent = "";
    }

    const handleKeeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleEnter(value);
        }
    }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {flag ? null :
        <span style={{ color: "#008c00", fontFamily: "Fira Code, monospace" }}>
          {`visitor@dillonhowell.com ${""} ~ % `}
        </span>
  }
        <span
        ref={inputRef}
          className="input"
          onKeyDown={(e) => {handleKeeyDown(e)}}
          style={{
            caretColor: "transparent",
            color: "#008c00",
            fontFamily: "Fira Code, monospace",
            backgroundColor: "transparent",
            border: "none",
            whiteSpace: "nowrap",
            alignContent:'left',
            textAlign: 'left',

          }}
          contentEditable= {staticPost ? false : true}
          onInput={(e) => {
            setValue(() => {
              return e.target.textContent;
            });
          }}
        >
          {staticPost ? flag ? value.split(" ").slice(2).join(" "): value : null}
          </span>
        <span
          style={{
            marginLeft: -5,
            color: "#008c00",
            fontFamily: "Fira Code, monospace",
          }}
        >
          {staticPost ? null : caret}
        </span>
      </div>
    </>
  );
};
