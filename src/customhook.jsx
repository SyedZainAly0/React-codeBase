import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
}

function Form() {
  const name = useInput("");

  return <input {...name} placeholder="Enter name" />;
}

export default Form