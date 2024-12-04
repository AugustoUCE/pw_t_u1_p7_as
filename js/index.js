const { createElement } = React;
const { createRoot } = ReactDOM;

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(createElement(NavigationBar));