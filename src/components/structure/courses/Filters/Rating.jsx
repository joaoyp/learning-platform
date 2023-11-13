import { Rating } from "@mui/material";
import { useState } from "react";
import { Lettering } from "../../../common/Lettering";
import { useDispatch, useSelector } from "react-redux";
import { setRatingSearch } from "../../../../redux/slices/ratingSlice";

export const CourseRating = () => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.ratingSearch.value);

  return (
    <>
      <div className="mt-2 flex justify-start">
        <Lettering text={"Rating:"} fontSize={18} fontWeight={"bold"} />
      </div>
      <div>
        <Rating
          precision={0.5}
          size="medium"
          className="mt-2"
          value={rating}
          onChange={(event, newValue) => {
            newValue
              ? dispatch(setRatingSearch(newValue))
              : dispatch(setRatingSearch(0));
          }}
        />
      </div>
    </>
  );
};
