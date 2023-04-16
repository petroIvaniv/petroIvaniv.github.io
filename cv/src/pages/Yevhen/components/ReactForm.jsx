import React, { useEffect, useRef, useState } from "react";
import { handleChange } from "../../../helpers/helpers";

const ReactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
  });
  console.log("render", formValues);

  const handleSubmit = () => {
    console.log(formValues);

    // console.log({
    //   name: nameInputRef.current.value,
    //   password: passwordInputRef.current.value,
    // });
  }

  // const nameInputRef = useRef(null)
  // const passwordInputRef = useRef(null)

  // const validate = () => {
  //   console.log(nameInputRef.current.value);
  // }

  return (
    <div>
      {/* <form>
        <label>
          Name:
          <input
          ref={nameInputRef}
            type="text"
            name="name"
            onChange={validate}
          />
        </label>
        <label>
          Password:
          <input
          ref={passwordInputRef}
            type="password"
            name="password"
          />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form> */}
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={(e) => handleChange(e, 'name', setFormValues)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={(e) => handleChange(e, 'password', setFormValues)}
          />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default ReactForm;
