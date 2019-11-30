let visibility = false;
 
const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const render = () => {
    const jsx = (
      <div>
        <h1>visibility Toggle</h1>
        <button onClick={toggleVisibility}>
          {visibility ? 'Hide Details' : 'Show Detail'}
        </button>
        {visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
}

render();