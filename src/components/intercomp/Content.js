const Content = (props) => {
  return (
    <>
      Enter Data :
      <input
        type="text"
        value={props.myDataProp}
        onChange={props.updateSateProp}
      />
    </>
  );
};

export default Content;
