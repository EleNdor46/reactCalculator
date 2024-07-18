const History = ({ arrayProps }) => {
  console.log(arrayProps);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">1 число</th>
          <th scope="col">операция</th>
          <th scope="col">2 число</th>
          <th scope="col">результат</th>
        </tr>
      </thead>
      <tbody>
        {arrayProps.map((prop) => {
          return (
            <tr key={prop.id}>
              <td>{prop.num1}</td>
              <td>{prop.operation}</td>
              <td>{prop.num2}</td>
              <td>{prop.result}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default History;
