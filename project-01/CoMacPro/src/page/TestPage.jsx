import React from "react";
import { InputValidate } from "../components/FormValidate/InputValidate";
import { Todo } from "../components/TodoLists/ToDo";

export const TestPage = () => {
  return (
    <>
      {/* kéo lên để thấy todo  */}
      <InputValidate />
      <Todo />
    </>
  );
};
