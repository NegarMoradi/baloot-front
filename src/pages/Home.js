import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./action/product";
import ProductList from "./ProductList";


const Home = () => {
  let { error, loading, products } = useSelector(state => state.getProductList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.getProductList())
  }, [])

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { loading && <div className="loading">Loading...</div> }
      { products.products && <ProductList 
                              products={products.products} 
                              totalPages={products.pager.total_pages}
                              sort={products.sort_options} /> }
    </div>
  );
}
 
export default Home;
