import { useFetchPersons } from "./hooks/usePersons.mjs";

import TitleH1 from "./components/TitleH1.jsx";
import PersonList from "./components/PersonList.jsx";
import PersonForm from "./components/PersonForm.jsx";

const App = () => {

  const { data: persons, isLoading } = useFetchPersons();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  };

  return (
    <>
      <TitleH1 title="Users lists"/>
      <PersonForm/>
      <PersonList persons={persons}/>
    </>
  );
};

export default App;
