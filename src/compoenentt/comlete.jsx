import React from "react";

export const Comlete = (props) => {
  const { completeState, onClicckBacck } = props;
  return (
    <div className="comlete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeState.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClicckBacck(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
