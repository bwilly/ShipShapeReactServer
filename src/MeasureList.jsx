import MeasureRow from "./MeasureRow";

export default class MeasureList extends React.Component {
  // this.state = {measures};

  constructor() {
    super();
    // this.state = { measures };


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
    
    this.state = { measures };
  }

  render() {
    const measureRows = this.props.measures.map(measure => (
      <MeasureRow key={measure.id} measure={measure} />
    ));
    return (
      <table className="bordered-table">
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>Id</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Measure</th>
          </tr>{" "}
        </thead>{" "}
        <tbody>{measureRows}</tbody>{" "}
      </table>
    );
  }
}
