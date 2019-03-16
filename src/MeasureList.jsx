import MeasureRow from "./MeasureRow";

export default class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => (
      <MeasureRow key={issue.id} issue={issue} />
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
            <th>Created</th> <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>{issueRows}</tbody>{" "}
      </table>
    );
  }
}
