import React from "react";
import Nav from "../nav/Nav";
import Image from "next/image";
import styles from "./Header.module.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Header({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Realtor"],
    loop: true,
    delaySpeed: 9000,
  });
  return (
    <div className={styles.header}>
      <Nav />
      <div className={styles.img1Cont}>
        <Image
          src="/assets/background.png"
          alt="landing page background image with clouds chair and lights creatively blended with photoshop"
          width={1500}
          height={1000}
          className={styles.img1Cont__img1}
        />
      </div>
      <div className={styles.img2Cont}>
        <Image
          src="/assets/background2.png"
          alt="landing page background image with clouds chair and lights creatively blended with photoshop"
          width={1800}
          height={1000}
          className={styles.img2Cont__img2}
        />
      </div>

      <div className={styles.header__title}>
        <h1 className={styles.typeText}>
          Not Your <br /> Average <span>{text}</span>
          {/* <Cursor cursorColor="#008cff" /> */}
        </h1>
        <p className={styles.description}>
          Real Trust has an eye for seeing a property's potential, coordinating
          design, and effectively marketing to get home owners top dollar on
          their sale.
        </p>
      <div className={styles.searchContainer}>
        <div className={styles.searchContainer__top}>
          <button>Buy</button>
          <button>Sell</button>
        </div>
        <div className={styles.searchContainer__bottom}>
          <div className={styles.left}>
            <div className={styles.imgCont}>
            <Image 
            src="/assets/Home.png"
            alt="home icon vector home icon line home icon"
            width={20}
            height={14}
            className={styles.img}
            />
            </div>
            <input type="text" name="" id="" placeholder="Search Property" className={styles.formControlInput}/>
          </div>
          <div className={styles.middle}>
          <div className={styles.imgCont}>
            <Image 
            src="/assets/location.png"
            alt="home icon vector home icon line home icon"
            width={12}
            height={14}
            className={styles.img}
            />
            </div>
            <input type="text" name="" id="" placeholder="Location" className={styles.formControlInput}/>
          </div>
          <div className={styles.right}>
          <div className={styles.imgCont}>
            <Image 
            src="/assets/updown.png"
            alt="home icon vector home icon line home icon"
            width={9}
            height={14}
            className={styles.img}
            />
            </div>
            <input type="number" name="" id="" placeholder="$100000-5000000" className={styles.formControlInput} step="1000"/>
          </div>
          <button className={styles.button}>Search</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Header;
