import { PrimaryButton } from "../../common/PrimaryButton";
import { SearchBar } from "./Filters/SearchBar";
import { FilterForm } from "./Filters/FilterForm";
import { OrderForm } from "./Filters/OrderForm";
import { useSelector } from "react-redux";
import { Categories } from "./Filters/Categories";
import { Price } from "./Filters/Price";
import { Duration } from "./Filters/Duration";
import { CourseRating } from "./Filters/Rating";

export const SearchAside = ({ onSearch }) => {
  const searchBarValue = useSelector((state) => state.searchBar.value);
  const filterSearchValue = useSelector((state) => state.filterSearch.value);
  const orderSearchValue = useSelector((state) => state.orderSearch.value);
  const categoriesSearchValue = useSelector(
    (state) => state.categorySearch.value
  );
  const durationSearchValue = useSelector(
    (state) => state.durationSearch.value
  );
  const ratingSearchValue = useSelector((state) => state.ratingSearch.value);
  const priceSearchValue = useSelector((state) => state.priceSearch.value);

  const handleSearch = () => {
    onSearch({
      categories: categoriesSearchValue,
      duration: durationSearchValue,
      rating: ratingSearchValue,
      priceMin: priceSearchValue[0],
      priceMax: priceSearchValue[1],
      searchBarValue,
      filterSearchValue,
      orderSearchValue,
    });
  };

  return (
    <>
      <aside className="w-3/12 top-24 sticky h-real-screen overflow-y-hidden overflow-x-hidden">
        <div className="p-2 flex justify-evenly">
          <FilterForm></FilterForm>
          <OrderForm></OrderForm>
        </div>
        <div className="m-4 flex justify-around">
          <SearchBar />
          <PrimaryButton text="Search" size="medium" onClick={handleSearch} />
        </div>
        <div className="pl-6 pr-6">
          <Categories />
          <Price />
          <Duration />
          <CourseRating />
        </div>
      </aside>
    </>
  );
};
