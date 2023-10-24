import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <>
      <TextField
        className="bg-white h-fit w-11/12 "
        size="medium"
        id="searchBar"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#008080",
            },
          },
        }}
        placeholder="Search for courses"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
};
