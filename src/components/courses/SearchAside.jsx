import { PrimaryButton } from "../common/PrimaryButton";
import { SearchBar } from "../common/SearchBar";
import { FilterForm } from "./FilterForm";
import { OrderForm } from "./OrderForm";
import { useSelector } from "react-redux";

export const SearchAside = () => {
  const searchBarValue = useSelector((state) => state.searchBar.value);
  const filterSearchValue = useSelector((state) => state.filterSearch.value);
  const orderSearchValue = useSelector((state) => state.orderSearch.value);

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
          <p>Programming Languages:</p>
          <p>Price Range:</p>
          <p>Duration:</p>
          <p>Ranking:</p>
        </div>
      </aside>
    </>
  );
};
