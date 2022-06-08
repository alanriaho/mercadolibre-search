import { Fragment, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductsList.scss";

const ProductsList = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("Categoría");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  /**
  * Search for a results in the database given a query.
  * @param resultsQuantity Quantity of results stored in state. Default is 4.
  */
   const searchForResults = useCallback((resultsQuantity = 4) => {
    setIsLoading(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
      .then((data) => data.json())
      .then((parsedData) => {
        setCategory([parsedData.filters?.[0]?.values?.[0]?.name ?? "Categoría"]);
        setResults(parsedData.results.slice(0, resultsQuantity));
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [query]);

  // This will run the searchForResults function when the "search" query changes.
  useEffect(() => {
    searchForResults();
  }, [searchForResults]);
  
  console.log(results);

  return (
    <>
      <Breadcrumbs sections={[category, `Resultados para "${query}"`]} />
      {isLoading ? <p>Cargando...</p> : (
        <div className="products-list">
          <div className="products-list__container">
            {results.map((product, index) => (
              <Fragment key={product.id}>
                <ProductRow
                  title={product.title}
                  imageSource={product.thumbnail}
                  price={product.price}
                  stateName={product.address.state_name}
                  productAttribute={product.attributes[0].values[0].name}
                  currency={product.currency_id || "ARS"}
                  id={product.id}
                  hasFreeShipping={product.shipping.free_shipping}
                />
                {index !== (results.length - 1) && <hr />}{/* Don't show the separator for the last product row */}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </>
)};

export default ProductsList;
