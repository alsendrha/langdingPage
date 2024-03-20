const RuleItem = ({ itemList }) => {
  return (
    <div>
      <div className="rule_item">
        <div className="rule_item_image_container">
          <img
            className="rule_item_image"
            src={itemList.image}
            alt="룰 이미지"
          />
        </div>
        <div className="rule_item_text">
          <p>{itemList.title}</p>
          <p>{itemList.content}</p>
        </div>
      </div>
    </div>
  );
};

export default RuleItem;
