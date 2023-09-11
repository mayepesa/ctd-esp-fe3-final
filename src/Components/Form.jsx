import React from "react";

const Form = ({ formValues, setFormValues }) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const handleOnSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('FormValues:::', formValues)
  };

  const handleOnChange = (e) => {
    const {value, name} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit} className='form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={(e) => handleOnChange(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={(e) => handleOnChange(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
