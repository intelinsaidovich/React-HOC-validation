import React from "react";
import ReactDOM from "react-dom";

const createForm = (Component, rules = {}) =>
  class extends React.Component {
    state = {
      touched: {},
      errors: {},
      values: {}
    };

    onSubmit = e => {
      e.preventDefault();
      const { touched } = this.state;
      const form = ReactDOM.findDOMNode(this);

      for (let i = 0; i < form.length; i++) {
        const value = form[i].value;
        const name = form[i].name;
        const tag = form[i].nodeName.toLowerCase();

        if (tag !== "input") continue;
        touched[name] = true;
        this.setState(prevState => ({
          touched: { ...prevState.touched, ...touched }
        }));
        this.validateInput(name, value);
      }

      const { errors } = this.state;

      if (!Object.keys(errors).length) alert("Well done!");
    };

    onBlur = e => {
      const { name, value } = e.target;
      const { touched } = this.state;

      if (value.length) {
        touched[name] = true;
        this.setState(prevState => ({
          touched: { ...prevState.touched, ...touched }
        }));
      }
      this.validateInput(name, value);
    };

    onInput = e => {
      const { name, value } = e.target;
      const { touched } = this.state;

      if (touched[name]) {
        this.validateInput(name, value);
      }
    };

    validateInput = (name, val) => {
      const touched = this.state.touched[name];
      const errors = this.state.errors;
      if (!touched) return;

      if (rules[name] === undefined) return;

      const error = rules[name]
        .filter(rule => rule(val) !== null)
        .map(rule => rule(val));

      if (error.length) {
        errors[name] = error;
      } else {
        delete errors[name];
      }

      this.setState({ errors });
    };

    render() {
      const { values, errors } = this.state;

      const form = {
        values,
        errors,
        onBlur: this.onBlur,
        onInput: this.onInput,
        onSubmit: this.onSubmit
      };

      return <Component form={form} />;
    }
  };

export default createForm;
