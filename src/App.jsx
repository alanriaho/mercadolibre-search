import SearchHeader from './components/SearchHeader/SearchHeader';
import './App.scss';

function App() {
  return (
    <div className="app">
      <section role="search">
        <SearchHeader />
      </section>
      <nav>Breadcrumbs</nav>
      <section role="list">Results</section>
    </div>
  );
}

export default App;
