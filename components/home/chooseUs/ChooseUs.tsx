import React from "react";
import styles from "./ChooseUs.module.scss";
import Image from 'next/image'
type Props = {};

function ChooseUs({}: Props) {
  return (
    <div className={styles.usCont}>
      <div className={styles.usCont__title}>Why Choose Us?</div>
      <div className={styles.usCont__el1}>
        <div className={styles.left}>
          <div className={styles.left__img}>
            <Image 
            src="/assets/pexels-fauxels-3182755.jpg"
            alt="group of people mixed race in a meeting discussing stuff"
            width={260}
            height={400}
            className={styles.img}
            />
          </div>
          <div className={styles.left__background}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.right__title}>
            <span></span>
            <p className={styles.title}>Potential ROI</p>
          </div>
          <p className={styles.right__desc}>
            Whetheryouare looking tobuyafixer upper or renovate your current
            homefor sale, wewill walk you throughpotential returns for projects.
          </p>
        </div>
      </div>
      <div className={styles.usCont__el2}>
        <div className={styles.left}>
          <div className={styles.left__title}>
            <span></span>
            <p className={styles.title}>Design</p>
          </div>
          <p className={styles.left__desc}>
            Our background in interiordesign makes theperfect guide through your
            design options and coordinating contractors to complete the home
            upgrade.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.right__img}>
          <Image 
            src="/assets/crop-architect-opening-blueprint.jpg"
            alt="group of people mixed race in a meeting discussing stuff"
            width={461}
            height={675}
            className={styles.img}
            />
          </div>
          <div className={styles.right__background}></div>
        </div>
      </div>
      <div className={styles.usCont__el3}>
        <div className={styles.left}>
          <div className={styles.left__img}>
          <Image 
            src="/assets/pexels-mikael-blomkvist-6476808.jpg"
            alt="group of people mixed race in a meeting discussing stuff"
            width={461}
            height={675}
            className={styles.img}
            />
          </div>
          <div className={styles.left__background}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.right__title}>
            <span></span>
            <p className={styles.title}>Marketing</p>
          </div>
          <p className={styles.right__desc}>
            Staging consultation, professional photos and a sophisticated
            digital marketing plan accompany every listing toreach today's
            buyers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
