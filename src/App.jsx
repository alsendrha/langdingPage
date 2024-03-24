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

  const topButton = useTransform(scrollY, [400, 500], [0, 1]);
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
  const lastTextOpacity = useTransform(
    scrollY,
    [24000, 24200, 27000, 28000],
    [0, 1, 1, 0]
  );
  const lastTextOpacity1 = useTransform(
    scrollY,
    [28500, 29000, 33000, 34000],
    [0, 1, 1, 0]
  );
  const lastContainerImage = useTransform(scrollY, [27000, 28000], [1, 0]);
  const lastContainerImage2 = useTransform(scrollY, [32000, 33000], [1, 0]);
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
      <a href="#top">
        <motion.div style={{ opacity: topButton }} className="top_move">
          <img src="/images/top_arrow.svg" />
          Top
        </motion.div>
      </a>
      <motion.div
        className="navbar"
        animate={scrollAnimation}
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <motion.div animate={scrollText} initial={{ opacity: 0 }}>
          <div className="logo" onClick={() => scrollTo(top)}>
            <a href="/">
              <img src="/images/card_image.png" alt="로고 이미지" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="nav_menu"
          animate={scrollText}
          initial={{ opacity: 0 }}
        >
          <nav className="nav_menu">
            <ul>
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#list">List</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.div>
        <motion.div className="progress_bar" style={{ scaleX }} />
      </motion.div>
      <section id="top" className="top_image">
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
              className="test_image_first"
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
            <motion.div className="test_box" id="about">
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
              <motion.p
                className="last_image_text2"
                style={{ opacity: lastTextOpacity1, transition: "all 0.5s" }}
              >
                진짜다
              </motion.p>
              <div className="last_container_images">
                <motion.img
                  style={{
                    opacity: lastContainerImage,
                    transition: "all 0.5s",
                  }}
                  className="last_image"
                  src="/images/background.jpg"
                  alt="배경이미지"
                />
                <motion.img
                  style={{
                    opacity: lastContainerImage2,
                    transition: "all 0.5s",
                  }}
                  className="last_image1"
                  src="/images/last_container_image.jpg"
                  alt="배경이미지"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="list">
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
      <footer id="contact" className="footer">
        <div className="footer_container">
          <div className="footer_flex_icon">
            <div className="footer_main_text">
              <strong>대표&nbsp;</strong>
              <span>김민영</span>
              <span className="footer_text_line">&nbsp;|&nbsp;</span>
              <strong>사업자번호&nbsp;</strong>
              <span>010-00-00001</span>
              <br />
              <strong>직업정보제공사업 신고번호&nbsp;</strong>
              <span> M1234567891011</span>
              <br />
              <strong>주소&nbsp;</strong>
              <span>서울시 서대문구 우리집로 1길 301호</span>
              <br />
              <strong>전화&nbsp;</strong>
              <span>010-1234-0001</span>
              <span className="footer_text_line">&nbsp;|&nbsp;</span>
              <strong>고객문의&nbsp;</strong>
              <span>minyoung@freshvege.com</span>
            </div>
            <div className="footer_icon_container">
              <div className="footer_icon">
                <img src="/images/facebook.svg" alt="페북 아이콘" />
              </div>
              <div className="footer_icon">
                <img src="/images/insta.svg" alt="인스타 아이콘" />
              </div>
              <div className="footer_icon">
                <img src="/images/youtube.svg" alt="유튜브 아이콘" />
              </div>
              <div className="footer_icon">
                <img src="/images/blog.svg" alt="블로그 아이콘" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="footer_last_one">
            <div>
              <p>제휴 문의</p>
            </div>
            <div>
              <p>광고 문의</p>
            </div>
            <div>
              <p>PR 문의</p>
            </div>
            <div>
              <p>IR 문의</p>
            </div>
          </div>
          <br />
          <div className="footer_last_two">
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <p>위치기반서비스 이용약관</p>
            <p>이용자보호 비전과 계획</p>
            <p>청소년보호정책</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
