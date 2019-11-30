console.log('App is learning');

// if statement
// ternary operator
// logical and operator

const app = {
  title: "React Start",
  subtitle: "This is the title",
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Jsx</li>
      <li>Seankim Created</li>
    </ol>
  </div>
);

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>
  } else {
    return undefined;
  }
}

const user = {
  name: 'Seankim',
  age: 10,
  location: 'New York'
}
let count = 0;

const addOne = () => {
  count++;
  renderCounterApp()
}

const subOne = () => {
  count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const renderCounterApp = () => {
  const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={subOne} id="my-idPlus" className="button">-1</button>
    <button onClick={addOne} id="my-idPlus" className="button">+1</button>
    <button onClick={reset}>reset</button>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();


