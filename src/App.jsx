import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "./App.css";
import RuleItem from "./components/RuleItem";
import SectionTwoRuleItem from "./components/SectionTwoRuleItem";
import { itemList, sectionTwoItemList } from "./data/SectionText";

function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scrollAnimation = useAnimation();
  const scrollText = useAnimation();

  const top = useTransform(scrollY, [0, 2000], ["135px", "135px"]);
  const height = useTransform(scrollY, [780, 2000], ["20vh", "60vh"]);
  const width = useTransform(scrollY, [780, 2000], ["10vw", "50vw"]);
  const right = useTransform(scrollY, [3000, 4000], ["0%", "47%"]);
  const text1Opacity = useTransform(scrollY, [5500, 5600], [0, 1]);
  const text2Opacity = useTransform(scrollY, [7600, 7700], [0, 1]);
  const text3Opacity = useTransform(scrollY, [9700, 9800], [0, 1]);
  const text4Opacity = useTransform(scrollY, [11900, 12000], [0, 1]);
  const text1FontWeight = useTransform(scrollY, [13000, 13100], [400, 600]);
  const text2FontWeight = useTransform(scrollY, [15100, 15200], [400, 600]);
  const text3FontWeight = useTransform(scrollY, [17100, 17200], [400, 600]);
  const text4FontWeight = useTransform(scrollY, [19100, 19200], [400, 600]);
  const lastTextOpacity = useTransform(scrollY, [24000, 24200], [0, 1]);
  const text1Color = useTransform(
    scrollY,
    [13000, 13100],
    ["rgba(0,0,0,1)", "rgba(0,0,0,0.5)"]
  );
  const text2Color = useTransform(
    scrollY,
    [15100, 15200],
    ["rgba(0,0,0,1)", "rgba(0,0,0,0.5)"]
  );
  const text3Color = useTransform(
    scrollY,
    [17100, 17200],
    ["rgba(0,0,0,1)", "rgba(0,0,0,0.5)"]
  );
  const text4Color = useTransform(
    scrollY,
    [19100, 19200],
    ["rgba(0,0,0,1)", "rgba(0,0,0,0.5)"]
  );

  const testText = useTransform(
    scrollY,
    [2000, 2500, 3000, 4000],
    [0, 1, 1, 0]
  );
  const borderRadius = useTransform(scrollY, [780, 2000], ["50%", "0%"]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("스크롤값", scrollY.get());
    if (latest > 0) {
      scrollAnimation.start({ backgroundColor: "rgba(255, 255, 255, 1)" });
      scrollText.start({ opacity: 1 });
    } else {
      scrollAnimation.start({ backgroundColor: "rgba(0, 0, 0, 0)" });
      scrollText.start({ opacity: 0 });
    }
  });

  return (
    <div>
      <motion.div
        className="navbar"
        animate={scrollAnimation}
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <motion.div animate={scrollText} initial={{ opacity: 0 }}>
          <div className="logo" onClick={() => scrollTo(top)}>
            <img src="/images/card_image.png" alt="로고 이미지" />
          </div>
        </motion.div>
        <motion.div
          className="nav_menu"
          animate={scrollText}
          initial={{ opacity: 0 }}
        >
          <nav className="nav_menu">
            <ul>
              <li>메뉴1</li>
              <li>메뉴1</li>
              <li>메뉴1</li>
              <li>메뉴1</li>
            </ul>
          </nav>
        </motion.div>
        <motion.div className="progress_bar" style={{ scaleX }} />
      </motion.div>
      <section className="top_image">
        <div className="top_title_container">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <p className="top_main_title">반려동물과 행복한 시간</p>
          </motion.div>
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
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <p className="top_title_2">특별한 순간들을 기억해보세요.</p>
          </motion.div>
        </div>
        <img src="/images/top_image.png" alt="탑이미지" />
      </section>
      <section className="test_section">
        <div style={{ marginTop: "100px" }}></div>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="first_test">
            <motion.p
              className="test_text_hello"
              style={{
                opacity: testText,
                transition: "all 0.5s",
              }}
            >
              안녕하세요
            </motion.p>
            <motion.img
              style={{
                height,
                borderRadius,
                width,
                right,
                top,
                position: "sticky",
                transition: "all 0.5s",
              }}
              src="/images/scroll_image.jpg"
              alt="테스트 이미지"
            />
            <div className="none_box1"></div>
            <motion.div className="test_box">
              <motion.p
                className="test_last_text"
                initial={{ fontWeight: 400, color: "black" }}
                style={{
                  opacity: text1Opacity,
                  fontWeight: text1FontWeight,
                  color: text1Color,
                  transition: "all 0.5s",
                }}
              >
                매일 산책하기!
              </motion.p>
              <motion.p
                className="test_last_text"
                initial={{ fontWeight: 400, color: "black" }}
                style={{
                  opacity: text2Opacity,
                  fontWeight: text2FontWeight,
                  color: text2Color,
                  transition: "all 0.5s",
                }}
              >
                매일 놀아주기!
              </motion.p>
              <motion.p
                className="test_last_text"
                initial={{ fontWeight: 400, color: "black" }}
                style={{
                  opacity: text3Opacity,
                  fontWeight: text3FontWeight,
                  color: text3Color,
                  transition: "all 0.5s",
                }}
              >
                매일 밥주기!
              </motion.p>
              <motion.p
                className="test_last_text"
                initial={{ fontWeight: 400, color: "black" }}
                style={{
                  opacity: text4Opacity,
                  fontWeight: text4FontWeight,
                  color: text4Color,
                  transition: "all 0.5s",
                }}
              >
                매일 똥치워주기!
              </motion.p>
            </motion.div>
            <div className="last_container">
              <motion.p
                className="last_image_text"
                style={{ opacity: lastTextOpacity, transition: "all 0.5s" }}
              >
                진짜냥?!
              </motion.p>
              <img src="/images/background.jpg" alt="배경이미지" />
              {/* <img src="/images/background.jpg" alt="배경이미지" /> */}
            </div>
          </div>
        </motion.div>
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
              <motion.div
                key={index}
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay:
                    index === 0
                      ? 0
                      : index === 1
                      ? 0.2
                      : index === 2
                      ? 0.4
                      : index === 3
                      ? 0
                      : 0.2,
                  duration: 1,
                  ease: "linear",
                }}
                viewport={{ once: true }}
              >
                <RuleItem itemList={item} itemId={`item_${index}}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section_second">
        <div className="section_two">
          <div className="section_two_white_box">
            <div className="section_two_white_box_text_container">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="section_two_white_box_text_title">
                  행복한 생활을 위한 활동 제안
                </p>
              </motion.div>
              <div className="section_two_white_box_text_sub_title_container">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="section_two_white_box_text_sub_title">
                    반려동물과 행복한 생황을 위한 황동제한 3가지를
                  </p>
                  <p className="section_two_white_box_text_sub_title">
                    함께 알아봐요
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="section_two_box_in_image">
              <div className="section_two_green_box"></div>
              <div className="section_two_image_box">
                <img
                  className="section_two_image"
                  src="/images/section_two.jpg"
                  alt="첫번째 이미지"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_two_item_container">
          <div className="section_two_rule_item_container">
            {sectionTwoItemList.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  y: 300,
                  opacity: 0,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: index === 0 ? 0 : index === 1 ? 0.2 : 0.4,
                  duration: 1,
                  ease: "linear",
                }}
                viewport={{ once: true }}
              >
                <SectionTwoRuleItem
                  itemList={item}
                  itemId={`section_two_item_${index}}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <div
          style={{ width: "100%", height: "500px", backgroundColor: "green" }}
        ></div>
      </footer>
    </div>
  );
}

export default App;
