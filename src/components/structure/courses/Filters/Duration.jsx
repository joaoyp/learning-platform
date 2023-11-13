import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { Lettering } from "../../../common/Lettering";
import { useDispatch } from "react-redux";
import { setDurationSearch } from "../../../../redux/slices/durationSlice";

export const Duration = () => {
  //Data
  const duration = ["Any", "< 1h", "1h - 4h", "> 4h"];
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-2 pt-2 flex justify-start">
        <Lettering text={"Duration:"} fontSize={18} fontWeight={"bold"} />
      </div>
      <div className="ml-2 w-full overflow-y-auto">
        <FormControl>
          <RadioGroup defaultValue="Any" name="radio-buttons-group">
            {duration.map((duration, index) => (
              <FormControlLabel
                key={index}
                value={duration}
                onChange={(event) => {
                  dispatch(setDurationSearch(event.target.value));
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
    </>
  );
};
