import React, { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = ({ formValues, setFormValues }) => {
  const { theme } = useContext(ContextGlobal);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (formValues.name.length > 5 && emailRegex.test(formValues.email)) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setShow(false);
    setError(false);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
     className="contactForm"
      onSubmit={handleOnSubmit}
      style={{ backgroundColor: theme.backgroundColor, color: theme.font }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
        className="contactInput"
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        className="contactInput"
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        <button
        className="contactSubmitBtn"

          type="submit"
          style={{ backgroundColor: theme.backgroundColor, color: theme.font }}
        >
          Submit
        </button>
      </div>
      {error && (
        <p className="error">Por favor verifique su información nuevamente</p>
      )}
      {show && (
        <p className="successMsg">
          Gracias {formValues.name}, te contactaremos cuando antes vía mail.
        </p>
      )}
    </form>
  );
};

export default Form;
