import { useEffect, useState } from "react";
import AdvancePagination from "./AdvancePagination";
import Pagination from "./Pagination";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${offset * limit}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => {
        setTotal(res.total);
        setProducts(res.products);
      });
  }, [offset]);
  return (
    <>
      <div className="product_layout">
        {products &&
          products.map(
            (item: {
              title: string;
              thumbnail: string;
              price: number;
              id: number;
            }) => {
              return (
                <div key={item.id} className="item-card">
                  <h4>{item.title}</h4>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>$ {item.price}</p>
                </div>
              );
            }
          )}
      </div>
      <Pagination
        setOffset={setOffset}
        offset={offset}
        total={total}
        limit={limit}
      />
      <AdvancePagination
        setOffset={setOffset}
        offset={offset}
        total={total}
        limit={limit}
      />
    </>
  );
};
export default ProductGrid;
