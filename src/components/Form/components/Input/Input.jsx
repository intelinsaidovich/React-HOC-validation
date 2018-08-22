import React, { Fragment } from "react";

const Input = ({ type, name, value, onInput, onBlur, errors }) => {
  const className = errors ? "_error" : "";
  return (
    <Fragment>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onInput={onInput}
        onBlur={onBlur}
      />
      {errors && <span>{errors}</span>}
    </Fragment>
  );
};

export default Input;
