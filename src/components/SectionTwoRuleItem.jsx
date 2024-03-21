import React from "react";
const SectionTwoRuleItem = ({ itemList, itemId }) => {
  return (
    <div>
      <input type="checkbox" id={itemId} className="card_check" />
      <div className="card_container">
        <label htmlFor={itemId} className="start_card_container">
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
        </label>
        <label htmlFor={itemId} className="end_card_container">
          <div className="end_card">
            <img src="/images/card_image.png" alt="카드 이미지" />
            <p>click</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SectionTwoRuleItem;
