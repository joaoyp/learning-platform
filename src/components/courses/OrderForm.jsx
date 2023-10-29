import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { setOrderSearch } from "../../redux/slices/orderSlice";

export const OrderForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FormControl className="w-4/12">
        <InputLabel id="orderBy">Order By:</InputLabel>
        <Select
          displayEmpty
          label="Order By:"
          defaultValue="Desc."
          onChange={(event) => {
            dispatch(setOrderSearch(event.target.value));
          }}
        >
          <MenuItem value="Desc.">Desc.</MenuItem>
          <MenuItem value="Asc.">Asc.</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
