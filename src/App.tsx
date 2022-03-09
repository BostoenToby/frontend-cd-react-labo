import AppContainer from "./components/AppContainer";
import AppRow from "./components/AppRow";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <main>
      {/*zet het in de midden */}
      <AppContainer>
        {/*geeft padding tot de randen */}
      <AppRow> 
        {/*Content */}
        <TodoInput />
      </AppRow>
      </AppContainer>
    </main>
  );
}

export default App;
