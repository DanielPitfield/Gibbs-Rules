import { DailyCharactersInfo, Person } from "../Data/PersonMappings";

interface SettingsProps {
  selectedCharacters: Person[];
  setSelectedCharacters: (people: Person[]) => void;
}

const Settings = (props: SettingsProps) => {
  return (
    <div>
      {DailyCharactersInfo.map((characterInfo) => {
        const isSelected = props.selectedCharacters.some((person) => person === characterInfo.person);

        const updateSelectedCharacters = isSelected
          ? () =>
              props.setSelectedCharacters(props.selectedCharacters.filter((person) => person !== characterInfo.person))
          : () => props.setSelectedCharacters([...props.selectedCharacters, characterInfo.person]);

        return (
          <label key={characterInfo.person}>
            {characterInfo.person}
            <input type="checkbox" checked={isSelected} onChange={updateSelectedCharacters} />
          </label>
        );
      })}
    </div>
  );
};

export default Settings;
