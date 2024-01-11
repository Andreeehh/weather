import * as Styled from './styles';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

export type LocationSearchProps = {
  onSearch: (query: string) => Promise<void>;
};

export const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    setDisabled(true);
    try {
      await onSearch(query);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Styled.Wrapper>
      <TextField
        placeholder="Type city name"
        value={query}
        onChange={handleInputChange}
        disabled={disabled}
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
