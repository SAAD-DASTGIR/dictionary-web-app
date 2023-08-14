import React from "react";

export default function Details(props) {
  const { sound } = props;

  const audioSrc = sound ? `${sound}?_=${Math.random()}` : null;

  return (
    <div className="details">
      {audioSrc && (
        <audio controls key={audioSrc}>
          <source src={audioSrc} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
