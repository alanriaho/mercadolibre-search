import SearchHeader from './components/SearchHeader/SearchHeader';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <SearchHeader />
      </header>
      <nav>Breadcrumbs</nav>
      <section role="list">Results</section>
    </div>
  );
}

export default App;
