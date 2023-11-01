import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { setSearch } from "../../redux/slices/searchBarSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        className="bg-white h-fit w-8/12"
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
        onChange={(event) => dispatch(setSearch(event.target.value))}
      ></TextField>
    </>
  );
};
