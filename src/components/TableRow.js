const TableRow = ({ data }) => {
  // console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => {
          const { id, name, image, current_price } = item;
          return name || image || current_price ? (
            <div key={id} className="box">
              <h3>currenyName : {name}</h3>
              <img src={image} alt="" />
              <h4>current_price : {current_price}</h4>
            </div>
          ) : (
            <h2>no data found</h2>
          );
        })}
      {!data && <h2>Loading...</h2>}
    </div>
  );
};
export default TableRow;
