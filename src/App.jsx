import { motion } from "framer-motion";
import "./App.css";
import RuleItem from "./components/RuleItem";
import { itemList } from "./data/SectionOne";

function App() {
  return (
    <div>
      <section className="top_image">
        <div className="top_title_container">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.5 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <p className="top_title_1">당신의 반려동물과 함께하는</p>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 140, opacity: 0.5 }}
            transition={{ delay: 1, duration: 2 }}
            viewport={{ once: true }}
          >
            <p className="top_title_2">특별한 순간들을 기억해보세요.</p>
          </motion.div>
        </div>
        <img src="/images/top_image.png" alt="탑이미지" />
      </section>
      <section>
        <div className="section_one">
          <div className="white_box">
            <div className="white_box_text_container">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="white_box_text_title">
                  반려동물의 건강과 행복을 위한 팁
                </p>
              </motion.div>
              <div className="white_box_text_sub_title_container">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="white_box_text_sub_title">
                    반려동물과 건강하고 행복한 삶을 위해 5가지 팁을
                  </p>
                  <p className="white_box_text_sub_title">함께 알아봐요</p>
                </motion.div>
              </div>
            </div>
            <div className="box_in_image">
              <div className="green_box"></div>
              <div className="section_image_box">
                <img
                  className="section_one_image"
                  src="/images/section_one.jpg"
                  alt="첫번째 이미지"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="item_container">
          <div className="rule_item_container">
            {itemList.map((item, index) => (
              <div key={index}>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, ease: "linear" }}
                  viewport={{ once: true }}
                >
                  <RuleItem itemList={item} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
