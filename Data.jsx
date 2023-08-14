import React from "react";

export default function Data(props) {
  return (
    <div className="data">
      {props.Word?<h3 className="word">{`Searched item: ${props.Word}`}</h3>:("")}
      {props.partofspeech?<p className="part-of-speech">{`As ${props.partofspeech || ''}`}</p>:("")} 
      {props.Defination?<ul className="defination"><li>{`${props.Defination || ''}`}</li></ul>:("")} 
      {props.Defination0?<ul className="defination"><li>{`${props.Defination0 || ''}`}</li></ul>:("")}
      {props.partofspeech1?<p className="part-of-speech">{`As ${props.partofspeech1}`}</p>:("")} 
      {props.Defination1? <ul className="defination"><li>{`${props.Defination1 || ''}`}</li></ul>:("")}
      {props.Defination2? <ul className="defination"><li>{`${props.Defination2 || ''}`}</li></ul>:("")}
      {props.synonym ? <p className="synonym">{`Synonym: ${props.synonym || ''},${props.synonym1 || ''},${props.synonym2 || ''}`}</p>:("")} 
      {props.antonym ? <p className="antonym">{`Antonym: ${props.antonym|| ''},${props.antonym1 || ''},${props.antonym2 || ''}`}</p>:("")} 
      {props.example ? <p className="example">{`Example: ${props.example || ''}`}</p>:("")} 
      </div>
  );
}
