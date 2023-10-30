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
import { Slider } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";

export const SearchAside = () => {
  const searchBarValue = useSelector((state) => state.searchBar.value);
  const filterSearchValue = useSelector((state) => state.filterSearch.value);
  const orderSearchValue = useSelector((state) => state.orderSearch.value);

  //Data
  const [categories, setCategories] = useState([
    "Java",
    "C#",
    "Kotlin",
    "C",
    "C++",
    "SQL",
    "HTML",
    "CSS",
    "Dart",
  ]);
  const [duration, setDuration] = useState(["Any", "< 1h", "1h - 4h", "> 4h"]);

  //Selected Data
  //Rating can be obtained
  const [rating, setRating] = useState(3);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  //Price can be obtained with price[0 or 1]
  const [price, setPrice] = useState([0, 500]);
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
        {console.log(selectedDuration)}
        {console.log(categories)}
        <div className="m-7">
          <Typography>Categories:</Typography>
          <div className="m-2 w-full max-h-52 overflow-y-auto">
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
          <Typography>Price Range in €:</Typography>
          <Slider
            className="m-2"
            getAriaLabel={() => "Price Range"}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            valueLabelDisplay="auto"
            sx={{
              color: "#008080",
            }}
            step={50}
            min={0}
            max={500}
          />
          <div className="mb-4 flex justify-evenly">
            <TextField
              className="w-1/5"
              size="small"
              id="min"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              placeholder="Min"
              value={parseInt(price[0])}
              onChange={(event) =>
                setPrice([
                  event.target.value === "" ? 0 : parseInt(event.target.value),
                  price[1],
                ])
              }
            />

            <TextField
              className="w-1/5"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              size="small"
              id="max"
              value={parseInt(price[1])}
              placeholder="Max"
              onChange={(event) =>
                setPrice([
                  price[0],
                  event.target.value === ""
                    ? 500
                    : parseInt(event.target.value),
                ])
              }
            />
          </div>
          <Typography>Duration:</Typography>
          <div className="m-2 w-full max-h-42 overflow-y-auto">
            <FormControl>
              <RadioGroup defaultValue="Any" name="radio-buttons-group">
                {duration.map((duration, index) => (
                  <FormControlLabel
                    value={duration}
                    onChange={() => {
                      setSelectedDuration(duration);
                    }}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#008080",
                          },
                        }}
                      />
                    }
                    label={duration}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <Typography>Rating:</Typography>
          <Rating
            size="medium"
            className="m-2"
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
