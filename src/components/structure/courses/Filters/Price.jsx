import { Slider, TextField } from "@mui/material";
import { useState } from "react";
import { Lettering } from "../../../common/Lettering";
import { useDispatch, useSelector } from "react-redux";
import { setPriceSearch } from "../../../../redux/slices/priceSlice";

export const Price = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.priceSearch.value);

  return (
    <>
      <div className="flex justify-start mt-2">
        <Lettering
          text={"Price range (€):"}
          fontSize={18}
          fontWeight={"bold"}
        />
      </div>
      <Slider
        className="mt-2"
        getAriaLabel={() => "Price Range"}
        value={price}
        onChange={(event) => {
          dispatch(setPriceSearch(event.target.value));
        }}
        valueLabelDisplay="auto"
        sx={{
          color: "#008080",
        }}
        step={50}
        min={0}
        max={500}
      />
      <div className="mt-2 flex justify-center">
        <div className="w-1/4 mr-4">
          <TextField
            label="Min:"
            size="small"
            type="number"
            id="min"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            placeholder="Min"
            value={parseInt(price[0])}
            onChange={(event) =>
              dispatch(
                setPriceSearch([
                  event.target.value === "" ? 0 : parseInt(event.target.value),
                  price[1],
                ])
              )
            }
          />
        </div>
        <div className="flex items-start mt-2">
          <Lettering text={"-"} fontSize={18} />
        </div>
        <div className="w-1/4 ml-4">
          <TextField
            label="Max:"
            type="number"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            size="small"
            id="max"
            value={parseInt(price[1])}
            placeholder="Max"
            onChange={(event) =>
              dispatch(
                setPriceSearch([
                  price[0],
                  event.target.value === ""
                    ? 500
                    : parseInt(event.target.value),
                ])
              )
            }
          />
        </div>
      </div>
    </>
  );
};
