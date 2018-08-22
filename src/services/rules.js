export const minLength = value => {
  const condition = value.length > 6;
  const error = condition ? null : "Must be at least 6 characters";
  return error;
};

export const hasValue = value => {
  const condition = value.length > 0;
  const error = condition ? null : "Field cannot be empty";
  return error;
};
