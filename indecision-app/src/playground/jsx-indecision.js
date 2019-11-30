const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('form submitted');
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
};

const app = {
    options: ['a','b','c']
  };

const numbers = [10, 20, 30];

const render = () => {
  const template = (
    <div>
      <h1>This is the Form practice</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove all</button>
      </form>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>
        })}
      </ol>
    </div>
  );
  ReactDOM.render(template, appRoot)
};

render();