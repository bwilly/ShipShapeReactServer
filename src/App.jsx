// import { React, ReactDOM } from "../node_modules/react-is";

// import IssueTable from './IssueTable';

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
const component = <h1>Hello World!</h1>; // A simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the content Node
// let me = issues;

const continentNode = document.getElementById("continents");

const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const message = continents.map(c => `Hello ${c}!`).join(" ");

const continentsComponent = <p>{message}</p>;

ReactDOM.render(continentsComponent, continentNode);

class SensorRow extends React.Component {
  render() {
    return "";
  }
}

class IssueRow2 extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        {" "}
        <td>{issue.id}</td> 
        {' '}
        <td>{issue.status}</td> 
        {' '}
        <td>{issue.owner}</td>
        {" "}
        <td>{issue.created.toDateString()}</td> 
        {' '}
        <td>{issue.effort}</td>
        {" "}
        <td>
          {issue.completionDate ? issue.completionDate.toDateString() : ""}
        </td>
        {" "}
        <td>{issue.title}</td>
        {" "}
      </tr>
    );
  }
}

class IssueTable2 extends React.Component {
  render() {
      const issueRows = this.props.issues.map(issue => (
      <IssueRow2 key={issue.id} issue={issue} />
      ));
      return (
      <table className="bordered-table">
          {" "}
          <thead>
          {" "}
          <tr>
              {" "}
              <th>Id</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Created</th> 
              {' '}
              <th>Effort</th>
              <th>Completion Date</th>
              <th>Title</th>
              {" "}
          </tr>
          {" "}
          </thead>
          {" "}
          <tbody>{issueRows}</tbody>
          {" "}
      </table>
      );
  }
}

const reactTable = document.getElementById("reactTable");
ReactDOM.render(<IssueTable2 issues={issues} />, reactTable);