/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { people } from "../constants/people";
import { useSearchParams } from "react-router-dom";
import TeamMembersContext from "./TeamMembersContext";
import { useContext } from "react";

const TeamMembersContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
    isCoFounder: "false",
  });

  const name = searchParams.get("name");
  const isCoFounder = searchParams.get("isCoFounder") === "true";

  const filteredPeopleList = people.filter((person) => {
    const nameMatch = person.name.toLowerCase().includes(name?.toLowerCase());
    const cofounderMatch = isCoFounder
      ? person.role.includes("Co-Founder")
      : true;
    return nameMatch && cofounderMatch;
  });

  const contextValues = { filteredPeopleList, setSearchParams };

  return (
    <TeamMembersContext.Provider value={contextValues}>
      {children}
    </TeamMembersContext.Provider>
  );
};

export default TeamMembersContextProvider;

export const useTeamMembersContext = () => {
  const context = useContext(TeamMembersContext);
  if (!context) {
    throw new Error(
      "useTeamMembersContext must be used within a TeamMembersContextProvider",
    );
  }
  return context;
};
