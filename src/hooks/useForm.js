import { useState } from "react";

function useForm(inputValues = {}) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    console.log(values)
  };
  return { values, handleChange, setValues };
}

export default useForm;
