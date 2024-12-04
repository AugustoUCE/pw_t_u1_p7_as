const e = React.createElement;

function App() {
  return e('div', null, 'Hola Mundo React');
}

const domContainer = document.querySelector('#navigation');
ReactDOM.render(e(App), domContainer);