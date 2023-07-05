import { useRegisterPerson } from "../hooks/usePersons.mjs";

import TitleH2 from "./TitleH2.jsx";
import FieldText from "./FieldText.jsx";
import FieldEmail from "./FieldEmail.jsx";
import FieldButton from "./FieldButton.jsx";

import "./PersonForm.css";

const PersonForm = () => {
  const register = useRegisterPerson();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const person = {
      fullname: `${data.firstname} ${data.lastname}`,
      email: data.email,
      flagState: true,
    };
    register.mutate(person);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <TitleH2 title="Register person form"/>
      <FieldText name="firstname" text="First name:"/>
      <FieldText name="lastname" text="Last name:"/>
      <FieldEmail name="email" text="Email:"/>
      <FieldButton value="Register"/>
    </form>
  );
};

export default PersonForm;
