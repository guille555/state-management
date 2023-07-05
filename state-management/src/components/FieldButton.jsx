import "./InputField.css";

const FieldButton = ({ value }) => {
  return (
    <div className="field">
      <input className="button" type="submit" value={value}/>
    </div>
  );
};

export default FieldButton;
