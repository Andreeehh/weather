// components/LocationSearch/index.tsx
import * as Styled from './styles';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

export type LocationSearchProps = {
  title?: string;
};

export const LocationSearch: React.FC<LocationSearchProps> = ({ title }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Adicione a lógica de busca aqui
    console.log(`Buscando por: ${query}`);
  };

  return (
    <Styled.Wrapper>
      <TextField
        placeholder="Digite o nome da cidade"
        value={query}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: <LocationOnIcon className="location-icon" />,
          endAdornment: (
            <SearchIcon
              className="search-icon"
              role="button"
              onClick={handleSearch}
            />
          ),
        }}
      />
    </Styled.Wrapper>
  );
};