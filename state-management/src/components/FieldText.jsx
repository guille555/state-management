import "./InputField.css";

const FieldText = ({ name, text }) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>{text}</label>
      <input className="fieldText" type="text" name={name} id={name}/>
    </div>
  );
};

export default FieldText;
