"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import Button from "@/src/shared/button/Button";
import Title from "@/src/shared/title/Title";
import Container from "@/src/layout/container/Container";
import ContainerFluid from "@/src/layout/container-fluid/ContainerFluid";
import Link from "next/link";
import Img from "../../assets/logo.svg";
import bg from "../../assets/background.jpg"
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";
import four from "../../assets/four.svg";
import five from "../../assets/five.svg";
import six from "../../assets/six.svg";
import seven from "../../assets/seven.svg";


const Hero = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <section className={styles.hero}>

            <div className={styles.background} style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '100vh',
            }}>
                <Container>
                    <header>
                        <div className={styles.homeSection}>

                            <div className={styles.headerMenu}>
                                <div className={styles.logo}>
                                    <Link href="/" smooth={true} duration={500} offset={-120}>
                                        <Image
                                            src={Img}
                                            alt="alot Logo"
                                            style={{ marginBottom: "1.6rem" }}
                                        />
                                    </Link>
                                </div>

                                <div className={styles.nav}>
                                    <Link href="#joinus">Home</Link>
                                    <Link href="#steps">About</Link>
                                    <div onClick={handleClick}>
                                        <Link href="#requirements">Services</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 15 7" fill="none">
                                            <path d="M6.50822 6.20427L0.646785 1.45027C-0.0449523 0.890927 0.517237 0.0124515 1.56707 0.0124515H13.2899C13.5249 0.0123086 13.7549 0.0602234 13.9525 0.150458C14.15 0.240693 14.3068 0.369423 14.4039 0.521232C14.501 0.673041 14.5344 0.841494 14.5 1.00642C14.4657 1.17134 14.3651 1.32575 14.2102 1.45114L8.34878 6.2034C8.23407 6.29655 8.0926 6.3712 7.93388 6.42235C7.77515 6.4735 7.60283 6.49997 7.4285 6.49997C7.25417 6.49997 7.08186 6.4735 6.92313 6.42235C6.76441 6.3712 6.62294 6.29742 6.50822 6.20427Z" fill="white" />
                                        </svg>
                                        {
                                            open ? (null) : (<div className={styles.absolute}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="229" height="188" viewBox="0 0 229 188" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.7321 1C40.9622 -0.333332 39.0378 -0.333335 38.268 0.999999L27.8756 19H16C7.16344 19 0 26.1634 0 35V172C0 180.837 7.16344 188 16 188H213C221.837 188 229 180.837 229 172V35C229 26.1634 221.837 19 213 19H52.1244L41.7321 1Z" fill="#D9D9D9" fill-opacity="0.58" />
                                                </svg>
                                                <div style={{ display: "flex", flexDirection: "column", marginTop: "-19rem", marginLeft: "3rem", marginRight: "3rem" }}>
                                                    <Link href="#joinus">Honeymoon Packages</Link>
                                                    <Link href="#steps">Tours Packages</Link>
                                                    <Link href="#requirements">Musical Events</Link>
                                                    <Link href="#requirements">Build Package</Link>
                                                </div>
                                            </div>)
                                        }

                                    </div>

                                    <Link href="#faqs">Upcomming Packages</Link>
                                </div>

                                <div className={styles.navButton}>
                                    <Link href="/">
                                        <Button type="button" buttonType="primary">
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </div>
                                {/* <div className={style$primary-colours-500$primary-colours-500s.hamburger}>
                                    {open ? (
                                        <Image
                                            src={cancel}
                                            alt="hamburger"
                                            width={50}
                                            onClick={handleClick}
                                        />
                                    ) : (
                                        <Image
                                            src={Menu}
                                            alt="hamburger"
                                            width={50}
                                            onClick={handleClick}
                                        />
                                    )}
                                </div> */}
                            </div>
                        </div>

                    </header>

                    <main>
                        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="18" viewBox="0 0 101 18" fill="none">
                            <path d="M3 15.59L10.8682 4.42393C11.7006 3.24271 13.4519 3.24271 14.2843 4.42393L20.4445 13.1661C21.2768 14.3473 23.0282 14.3473 23.8605 13.1661L30.0207 4.42393C30.8531 3.24271 32.6044 3.24271 33.4368 4.42393L39.597 13.1661C40.4293 14.3473 42.1807 14.3473 43.013 13.1661L49.1732 4.42393C50.0056 3.24271 51.7569 3.24271 52.5893 4.42393L58.7495 13.1661C59.5818 14.3473 61.3332 14.3473 62.1655 13.1661L68.3257 4.42393C69.1581 3.24271 70.9094 3.24271 71.7418 4.42393L77.902 13.1661C78.7343 14.3473 80.4857 14.3473 81.318 13.1661L87.4782 4.42393C88.3106 3.24271 90.0619 3.24271 90.8943 4.42393L98.7625 15.59" stroke="#DF6951" stroke-width="5.22371" />
                        </svg>
                        <h1 className={styles.heromessage}>
                            No matter where you’re <br /> going to, we’ll take you <br /> there
                        </h1>
                        <div className={styles.greybg}>
                            <div className={styles.nav}>
                                <Link href="#joinus">Where to?</Link>
                                <div className={styles.right}>  <Link href="#steps" style={{ marginRight: "2.6rem" }}>Travel Type</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                                        <path d="M1.41882 1.97327L8.75173 7.17648L16.0846 1.97327" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></div>

                                <div>  <Link href="#steps" style={{ marginRight: "2.6rem" }}>Duration</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                                        <path d="M1.41882 1.97327L8.75173 7.17648L16.0846 1.97327" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></div>
                                <div className={styles.navButton}>
                                    <Link href="/">
                                        <Button type="button" buttonType="secondary">
                                            Submit
                                        </Button>
                                    </Link>
                                </div>

                            </div>

                        </div>
                        <div className={styles.customers}>
                            <Image src={one} alt="one" />
                            <Image src={two} alt="two" className={styles.img} />
                            <Image src={three} alt="three" className={styles.img} />
                            <Image src={four} alt="four" className={styles.img} />
                            <Image src={five} alt="five" className={styles.img} />
                            <Image src={six} alt="six" className={styles.img} />
                            <Image src={seven} alt="seven" className={styles.img} />
                            <span>2,500 people booked Tommorowland Event in last 24 hours</span>
                        </div>
                    </main>
                </Container>
            </div>


        </section>
    );
};


export default Hero;

