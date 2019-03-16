import MeasureList from './MeasureList';

const issues = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    effort: 5,
    completionDate: undefined,
    title: "Error in console when clicking Add"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-16"),
    effort: 14,
    completionDate: new Date("2016-08-30"),
    title: "Missing bottom border on panel"
  },
  {
    id: 3,
    status: "Assigned",
    owner: "Brian",
    created: new Date("2019-03-09"),
    effort: 14,
    completionDate: new Date("2018-12-20"),
    title: "Stuff bottom border on panel"
  }
];

const contentNode = document.getElementById("world");
const component = <h1>Climate</h1>; // A simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the content Node


const reactTable = document.getElementById("reactTable");
ReactDOM.render(<MeasureList issues={issues} />, reactTable);


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


