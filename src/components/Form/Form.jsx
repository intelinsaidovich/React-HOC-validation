import React from "react";
import Input from "./components/Input/Input";
import { minLength, hasValue } from "services/rules";
import createForm from "services/createForm";

export const rules = {
  username: [minLength, hasValue],
  password: [hasValue]
};

const Form = ({ form: { values, errors, onSubmit, onInput, onBlur } }) => (
  <form onSubmit={onSubmit}>
    <Input
      type={"text"}
      name={"username"}
      value={values.username}
      onInput={onInput}
      onBlur={onBlur}
      errors={errors.username}
    />

    <Input
      type={"password"}
      name={"password"}
      value={values.password}
      onInput={onInput}
      onBlur={onBlur}
      errors={errors.password}
    />

    <button type="submit">Tell me what's your cat's name</button>
  </form>
);

export default createForm(Form, rules);
