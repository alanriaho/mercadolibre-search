import { useEffect, useState } from 'react';
import SearchHeader from './components/SearchHeader/SearchHeader';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import './App.scss';

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => console.log(results), [results]); // TO DO: REMOVE THIS LATER

  /**
  * Search for a results in the database given a query.
  * @param resultsQuantity Quantity of results stored in state. Default is 4.
  */
  const searchForResults = (event, resultsQuantity = 4) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
      .then((data) => data.json())
      .then((parsedData) => setResults(parsedData.results.slice(0, resultsQuantity)))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="app">
      <header>
        <SearchHeader
          handleSearch={searchForResults}
          query={query}
          setQuery={setQuery}
        />
      </header>
      <nav>
        <Breadcrumbs sections={["Hello", "Other hello", "Just testing"]} />
      </nav>
      <section>
        <ProductDetails productId="MLA756297077" />
      </section>
      <section role="list">
        <ProductsList productsList={results} />
      </section>
    </div>
  );
}

export default App;
