import "./InputField.css";

const FieldEmail = ({ name, text }) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>{text}</label>
      <input className="fieldText" type="email" name={name} id={name}/>
    </div>
  );
};

export default FieldEmail;
