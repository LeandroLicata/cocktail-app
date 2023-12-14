import { ButtonContainer, Button } from "./styles";

const FilterButtons = ({ filter, setFilter }) => {
  const filters = [
    { key: "name", label: "Por nombre" },
    { key: "ingredients", label: "Por ingredientes" },
    { key: "categories", label: "Por categorías" },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <ButtonContainer>
      {filters.map((f) => (
        <Button
          key={f.key}
          selected={filter === f.key}
          onClick={() => handleFilterChange(f.key)}
        >
          {f.label}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default FilterButtons;
