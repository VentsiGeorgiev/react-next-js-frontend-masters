const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The peperoni pizza",
      description: "cheese, peperoni",
    }),
    React.createElement(Pizza, {
      name: "The margarita pizza",
      description: "cheese, ketchup - wtf?",
    }),
    React.createElement(Pizza, {
      name: "Hawaii",
      description: "pineapple",
    }),
  ]);
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
