import "../Catalog/Catalog.scss";
import CatalogCard from "./components/CatalogCard/CatalogCard";
import { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ProductSlice } from "../../store/reducers/ProductSlice";
import { Sort } from "../../models/ISort";

const Catalog = () => {
  const [selectedSort, setSort] = useState(Sort.new);
  const { products } = useAppSelector((state) => state.productReducer);
  const { cart } = useAppSelector((state) => state.cartReducer);
  console.log(cart);
  const { sort } = ProductSlice.actions;
  const dispatch = useAppDispatch();
  const handleSort = (e: SyntheticEvent<HTMLSelectElement>) => {
    const sortType = e.currentTarget.value as Sort;
    if (Object.values(Sort).includes(sortType)) {
      dispatch(sort(sortType));
      setSort(sortType);
    }
  };

  return (
    <main className="catalog-page">
      <select
        value={selectedSort}
        onChange={handleSort}
        className="catalog-sort"
        name="sort"
      >
        <option value={Sort.new}>Порядок: сперва новые</option>
        <option value={Sort.cheap}>Порядок: сперва дешевле</option>
        <option value={Sort.expensive}>Порядок: сперва дороже</option>
      </select>
      <ul className="catalog__list">
        {products.map((item) => {
          return <CatalogCard key={item.id} {...item} />;
        })}
      </ul>
    </main>
  );
};

export default Catalog;
