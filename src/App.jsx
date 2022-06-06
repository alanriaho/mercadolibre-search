import SearchHeader from './components/SearchHeader/SearchHeader';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <SearchHeader />
      </header>
      <nav>
        <Breadcrumbs sections={["Hello", "Other hello", "Just testing"]} />
      </nav>
      <section role="list">Results</section>
    </div>
  );
}

export default App;
