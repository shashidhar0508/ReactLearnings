const ContentSibling = (props) => {
  return (
    <>
      <h3 className="bg-dark text-warning">
        Data sent from sibling through parent: {props.data}
      </h3>
    </>
  );
};

export default ContentSibling;
