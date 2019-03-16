import MeasureList from './MeasureList';

const measures = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    measureVal: 45
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-16"),
    measureVal: 50
  },
  {
    id: 3,
    status: "Assigned",
    owner: "Brian",
    created: new Date("2019-03-09"),
    measureVal: 30
  }
];

const contentNode = document.getElementById("world");
const component = <h1>Climate</h1>; // A simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the content Node


const reactTable = document.getElementById("reactTable");
ReactDOM.render(<MeasureList measures={measures} />, reactTable);


// let me = issues;

// const continentNode = document.getElementById("continents");

// const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
// const message = continents.map(c => `Hello ${c}!`).join(" ");

// const continentsComponent = <p>{message}</p>;

// ReactDOM.render(continentsComponent, continentNode);

// class SensorRow extends React.Component {
//   render() {
//     return "";
//   }
// }


