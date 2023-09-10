import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry"
   
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === "checkbox") {
      value= value.target.checked;
  }

  setFormData ({
    ...formData,
    [name]: value,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(formData);
}
  return (
    <form>
      <input type="text" name= "firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name= "lastName" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
