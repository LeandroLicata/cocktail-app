import { SearchBar } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultsSearchBar = ({ type, value }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <SearchBar
      type="search"
      defaultValue={value}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder={`Busca el trago por ${
        type === "name"
          ? "nombre"
          : type === "ingredients"
          ? "ingredientes"
          : "categorías"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/results?type=${type}&value=${searchValue}`);
        }
      }}
    />
  );
};

export default ResultsSearchBar;
