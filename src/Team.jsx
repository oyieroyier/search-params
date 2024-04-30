import InputField from "./components/InputField";
import ListsContainer from "./components/ListsContainer";
import Checkbox from "./components/Checkbox";
import { useTeamMembersContext } from "./context/TeamMembersContextProvider";

const Team = () => {
  const { setSearchParams } = useTeamMembersContext();

  return (
    <div>
      <div className="flex flex-col">
        <InputField
          onChange={(e) =>
            setSearchParams(
              (previousValue) => {
                previousValue.set("name", e.target.value);
                return previousValue;
              },
              { replace: true },
            )
          }
        />
        <Checkbox
          onChange={(e) =>
            setSearchParams(
              (previousValue) => {
                previousValue.set("isCoFounder", e.target.checked);
                return previousValue;
              },
              { replace: true },
            )
          }
        />
      </div>
      <ListsContainer />
    </div>
  );
};

export default Team;
