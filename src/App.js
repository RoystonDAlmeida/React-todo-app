import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="todo-h1">Simple To-do app</h1>
      </header>
      <body>
        <br></br>
        <form action="/submit_form" method="post">
          <div className='heading'>
            <label for="heading">Heading:</label>
            <input type="text" id="heading" name="heading" placeholder='Type the main heading ot the task' required></input>
          </div>
        </form>
      </body>
    </div>
  );
}

export default App;
