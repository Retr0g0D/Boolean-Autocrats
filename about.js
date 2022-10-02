import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Domain from "./Components/Domain";
import Department from "./Components/Department";
import domains from "../data/domains.json";
import Faq from "./Components/Faq";
import departments from "../data/departments.json";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer";
import OffBearSec from "./Components/OffBearSec";
import exofficebearers_18_22 from "../data/exofficebearers_18-22.json"
import styles from "../styles/about.module.css"

export default function About(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  function handle(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Boolean Autocrats</title>
        <meta name="description" content="Official Boolean Autocrats Website" />
        <link rel="icon" href="/boolean.png" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <Navbar transfer={props.theme} setTheme={props.setTheme} />

      <main
        className={props.theme ? styles.about_main_container_light : styles.about_main_container}
      >
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>About Us</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>About Us</h1>
          </div>
        )}
        <div className={styles.subcontainer}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            About Boolean
          </h2>

          <div className={styles.box}>
            <img className={styles.ssnimg} src="\ssntower.jpg" alt="ssn" />
            <p className={props.theme ? styles.para_light_main : styles.para_main}>
              
              <div className={styles.main}>
                <div>Dr. </div>
                <div> Dr. </div>
                <div>Dr.  </div>
              </div>
            </p>
          </div>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            What is Boolean Autocrats?
          </h2>
          <p className={props.theme ? styles.para_light : styles.para}>
            We are a community of coders specialised in domains like Competitive Coding, Machine
            Learning, Web and App Development etc. We aim to support and nurture future developers
            and ensure equity in coding!
          </p>
        </div>
        <div>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            What do we do?
          </h2>
          <Container className={`mt-10` + " " + styles.departmentContainer}>
            <Row>
              {departments.map((department, index) => {
                return <Department key={index} department={department} theme={props.theme} />;
              })}
            </Row>
          </Container>
        </div>
        <div className={styles.content}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            Meet the team!
          </h2>
          {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} theme={props.theme} />;
          })}
        </div>

        {/*  Alumni Section */}
        <h2 className={props.theme ? styles.subheader_light : styles.subheader} style={{ "fontSize": "30px" }}>
          
        </h2>
        <OffBearSec year="2022-24" theme={props.theme} file={exofficebearers_18_22} />
        {/* */}

        <div className={styles.faq}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            Frequently Asked Questions
          </h2>
          <Container className={styles.faqContainer}>
            <Faq theme={props.theme} />
          </Container>
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} about={true} />
      </div>
    </div>
  );
}
