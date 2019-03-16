import MeasureRow from "./MeasureRow";

export default class MeasureList extends React.Component {
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
