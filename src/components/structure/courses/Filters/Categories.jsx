import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Lettering } from "../../../common/Lettering";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySearch } from "../../../../redux/slices/categorySlice";

export const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.categorySearch.value);

  //Data
  const categories = [
    "Java",
    "C#",
    "Kotlin",
    "C",
    "C++",
    "SQL",
    "HTML",
    "CSS",
    "Dart",
  ];

  return (
    <>
      <div className="flex justify-start">
        <Lettering text={"Categories:"} fontSize={18} fontWeight={"bold"} />
      </div>
      <div className="w-full h-52 mt-2 overflow-y-auto">
        <FormGroup>
          {categories.map((category, index) => (
            <FormControlLabel
              key={index}
              value={category}
              onChange={(e) => {
                if (e.target.checked) {
                  dispatch(
                    setCategorySearch([...selectedCategories, category])
                  );
                } else {
                  dispatch(
                    setCategorySearch(
                      selectedCategories.filter(
                        (selectedCategory) => selectedCategory !== category
                      )
                    )
                  );
                }
              }}
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
    </>
  );
};
