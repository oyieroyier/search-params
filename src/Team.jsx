import InputField from "./components/InputField";
import ListsContainer from "./components/ListsContainer";
import Checkbox from "./components/Checkbox";
import { people } from "./constants/people";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col">
        <InputField />
        <Checkbox />
      </div>
      <ListsContainer people={people} />
    </div>
  );
};

export default Team;
