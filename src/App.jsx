import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compoenentt/inputTodo";
import { Incomplete } from "./compoenentt/incomplete";
import { Comlete } from "./compoenentt/comlete";

export const App = () => {
  //状態を持つものをstateととして構築する
  //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [incompleteState, setIncompleteState] = useState([]);
  const [completeState, setCompleteState] = useState([]);
  const [inputState, setInputState] = useState("");
  const onchangeInput = (e) => {
    setInputState(e.target.value);
  };

  const onClickAdd = () => {
    if (inputState === "") return;
    const newAdd = [...incompleteState, inputState];
    setIncompleteState(newAdd);
    setInputState("");
  };

  const onClockComplete = (index) => {
    const newComplete = [...completeState, incompleteState[index]];
    incompleteState.splice(index, 1);
    setCompleteState(newComplete);
  };

  const onClickDelete = (index) => {
    //alert(index + "番目の削除");
    const newDelete = [...incompleteState];
    newDelete.splice(index, 1);
    setIncompleteState(newDelete);
  };

  const onClicckBacck = (index) => {
    const newIncomplete = [...incompleteState, completeState[index]];
    setIncompleteState(newIncomplete);
    completeState.splice(index, 1);
  };

  return (
    //jsxの記述上、複数行を記述する際はからのタグでくくる
    <>
      <InputTodo
        inputState={inputState}
        onChange={onchangeInput}
        onClick={onClickAdd}
        disabled={incompleteState.length >= 5}
      />
      {incompleteState.length >= 5 && (
        <p style={{ color: "red" }}>未完了は5個までだよ、消化しろ〜。</p>
      )}

      <Incomplete
        incompleteState={incompleteState}
        onClockComplete={onClockComplete}
        onClickDelete={onClickDelete}
      />
      <Comlete completeState={completeState} onClicckBacck={onClicckBacck} />
    </>
  );
};
