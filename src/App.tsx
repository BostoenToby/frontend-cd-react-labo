import AppContainer from "./components/AppContainer";
import AppRow from "./components/AppRow";
import TodoAppHeader from "./components/TodoAppHeader";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const dummyItems = new Array(6)

  return (
    <main>
      {/*zet het in de midden */}
      <AppContainer>
        {/*geeft padding tot de randen */}
      <AppRow> 
        {/*Content */}
        <TodoAppHeader />

        <TodoInput />

        {/* {dummyItems.map(() => {<TodoItem />})} */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        
      </AppRow>
      </AppContainer>
    </main>
  );
}

export default App;
