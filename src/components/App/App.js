import AddTodo from '../AddTodo';
import Filtering from '../Filtering';
import Title from '../Title';
import Todos from '../Todos';
import classes from './app.module.css'

function App() {
  return (
    <div className={classes.app}>
      <Title />
      <AddTodo />
      <Filtering />
      <Todos />
    </div>
  );
}

export default App;
