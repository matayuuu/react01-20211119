import React from "react";

export const Incomplete = (props) => {
  const { incompleteState, onClockComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteState.map((todo, index) => {
          return (
            //reactでmapを使いループする際は、keyをつける
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClockComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
