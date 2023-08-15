import Image from "next/image";
import styles from "./footer.module.scss";
import Button from "@/src/shared/button/Button";
import Title from "@/src/shared/title/Title";
import Container from "@/src/layout/container/Container";
import ContainerFluid from "@/src/layout/container-fluid/ContainerFluid";
import Logo from "../../assets/logo2.svg";
import linkedin from "../../assets/linkedin.svg";
import messenger from "../../assets/messenger.svg";
import twitter from "../../assets/twitter.svg";
import meta from "../../assets/meta.svg";
import Link from "next/link";



const Footer = () => {

    return (
        <footer>
            <ContainerFluid>

                <Container>
                    <div className={styles.grid}>

                        <div className={styles.first}>
                            <div className={styles.logo}>
                                <Link href="/">
                                    <Image
                                        src={Logo}
                                        alt="alot Logo"
                                        style={{ marginBottom: "1.6rem" }}
                                    />
                                </Link>
                            </div>
                            <p className={styles.footparagraph}>
                                Travel helps companies manage payments easily.
                            </p>

                            <div className={styles.social}>
                                <div className={styles.socialhandles}>
                                    <Link href="#" className={styles.socials}>
                                        <Image src={linkedin} alt="facebook" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className={styles.socials}
                                    >
                                        <Image src={messenger} alt="linkedln" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className={styles.socials}
                                    >
                                        <Image src={twitter} alt="instagram" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className={styles.socials}
                                    >
                                        <Image src={meta} alt="twitter" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.linkgrid}>
                            <h4 className={styles.heading}>Company</h4>
                            <div className={styles.otherlink}>
                                <Link href="#">About Us</Link>
                                <Link href="#">Careers</Link>
                                <Link href="#">Blog</Link>
                                <Link href="#">Pricing</Link>
                            </div>
                        </div>

                        <div className={styles.linkgrid}>
                            <h4 className={styles.heading}>Destinations</h4>
                            <div className={styles.otherlink}>
                                <Link href="#">Maldives</Link>
                                <Link href="#">Los Angelas</Link>
                                <Link href="#">Las Vegas</Link>
                                <Link href="#">Torronto</Link>
                            </div>
                        </div>

                        <div className={styles.inputgrid}>

                            <>
                                <h4 className={styles.heading}>
                                    Join our newsletter
                                </h4>
                                <div className={styles.subscribe}>
                                    <form
                                        className={styles.form}
                                    >
                                        <input
                                            type="email"
                                            placeholder={`Enter your Email`}
                                            name="email"
                                            className={styles.forminput}
                                        />
                                        <div className={styles.button}>
                                            <Button
                                                type="submit"
                                                buttonType="primary"
                                                style={{ padding: 10, borderRadius: "none" }}
                                            >
                                                Subscribe
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                                <p className={styles.footparagraph}>
                                    *  Will send you weekly updates for your better
                                    tour packages.
                                </p>
                            </>
                        </div>


                    </div>
                </Container>

                <div className={styles.thinline}></div>
                <div className={styles.foot}>
                    <p>
                        Copyright @ Xpro 2022. All Rights Reserved.
                    </p>
                </div>
            </ContainerFluid>
        </footer>
    )
}

export default Footer