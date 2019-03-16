export default class MeasureRow extends React.Component {
    render() {
      const measure = this.props.measure;
      return (
        <tr>
          {" "}
          <td>{measure.id}</td> 
          {' '}
          <td>{measure.owner}</td>
          {" "}
          <td>{measure.created.toDateString()}</td> 
          {" "}
          <td>
            {/* {issue.completionDate ? issue.completionDate.toDateString() : ""} */}
            {measure.measureVal}
          </td>
          {" "}
        </tr>
      );
    }
}
