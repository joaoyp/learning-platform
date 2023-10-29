import { useState } from "react";
import { PrimaryButton } from "../common/PrimaryButton";
import { SearchBar } from "../common/SearchBar";
import { FilterForm } from "./FilterForm";
import { OrderForm } from "./OrderForm";
import { useSelector } from "react-redux";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";

export const SearchAside = () => {
  const searchBarValue = useSelector((state) => state.searchBar.value);
  const filterSearchValue = useSelector((state) => state.filterSearch.value);
  const orderSearchValue = useSelector((state) => state.orderSearch.value);

  const [categories, setCategories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
  ]);

  const [rating, setRating] = useState("0");

  return (
    <>
      <aside className="w-3/12">
        <div className="m-4 mt-8 flex justify-around">
          <FilterForm></FilterForm>
          <OrderForm></OrderForm>
        </div>
        <div className="m-4 flex justify-around">
          <SearchBar />
          <PrimaryButton
            text="Search"
            size="medium"
            onClick={() => {
              console.log(searchBarValue);
              console.log(filterSearchValue);
              console.log(orderSearchValue);
            }}
          />
        </div>
        <div className="m-7">
          <p>Categories:</p>
          <div className="m-2 w-full max-h-48 overflow-y-auto">
            <FormGroup>
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#008080",
                        },
                      }}
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>
          </div>
          <p>Price Range:</p>
          <p>Duration:</p>
          <Typography component="legend">Rating</Typography>
          <Rating
            className="m-2"
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
      </aside>
    </>
  );
};
