import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import ShowList from "./components/ShowList";

function App(): JSX.Element {
  return (
    <div className="App">
      <AppHeader />
      <ShowList />
      <AppFooter />
    </div>
  );
}

export default App;
