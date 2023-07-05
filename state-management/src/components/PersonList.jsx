import { useDeletePerson, useUpdatePerson } from "../hooks/usePersons.mjs";

import "./PersonList.css";
import "./InputField.css";

const PersonList = ({ persons }) => {

  const deleteHook = useDeletePerson();
  const updateHook = useUpdatePerson();

  const handleDelete = (id) => {
    deleteHook.mutate(id);
  };

  const handleUpdate = (person) => {
    updateHook.mutate(person);
  };

  const PersonName = ({ name }) =>{
    return (
      <span className="personName">{name}</span>
    );
  };

  const PersonState = ({ person }) => {
    const launchUpdate = (event) => {
      handleUpdate({
        ...person,
        flagState: event.target.checked
      });
    };
    return (
      <>
        <input
          className="checkbox"
          type="checkbox"
          name={person.fullname}
          id={person.fullname}
          checked={person.flagState}
          onChange={launchUpdate}
        />
        <label htmlFor={person.fullname}>
          {(person.flagState) ? ("Active") : ("Inactive")}
        </label>
      </>
    );
  };

  const DeletePerson = ({ id }) => {
    const launchDelete = () => handleDelete(id);
    return (
      <button
        className="button"
        onClick={launchDelete}
      >
        Delete
      </button>
    );
  };

  const Person = ({ person }) => {
    return (
      <div className="personContainer">
        <PersonName name={person.fullname}/>
        <DeletePerson id={person.id}/>
        <PersonState person={person}/>
      </div>
    );
  };

  return (
    <div className="listPersons">
      {
        persons.map((person) => {
          return (
            <Person person={person} key={person.id}/>
          );
        })
      }
    </div>
  );
};

export default PersonList;
