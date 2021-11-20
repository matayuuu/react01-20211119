import React from "react";

export const InputTodo = (props) => {
  const { inputState, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力して下さい"
        value={inputState}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
