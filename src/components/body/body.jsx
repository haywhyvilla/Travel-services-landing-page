import Button from "@/src/shared/button/Button";
import Title from "@/src/shared/title/Title";
import Container from "@/src/layout/container/Container";
import ContainerFluid from "@/src/layout/container-fluid/ContainerFluid";
import styles from "./body.module.scss";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image5 from "../../assets/image5.svg";
import category1 from "../../assets/category1.svg";
import category2 from "../../assets/category2.svg";
import category3 from "../../assets/category3.svg";
import category4 from "../../assets/category4.svg";
import illustration from "../../assets/illustration.svg";
import illustration2 from "../../assets/illustration2.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import Image from "next/image";
import Link from "next/link";


const Body = () => {

    const categories = [
        {
            image: category1,
            title: "Guided Tours",
        },
        {
            image: category2,
            title: "Best Flights Options",
        },
        {
            image: category3,
            title: "Religious Tours",
        },
        {
            image: category4,
            title: "Medical insurance",
        }
    ]

    return (
        <section>
            <div className={styles.sponsors}>
                <Image src={image1} alt="image1" />
                <Image src={image2} alt="image2" />
                <Image src={image3} alt="image3" />
                <Image src={image4} alt="image4" />
                <Image src={image5} alt="image5" />
            </div>
            <ContainerFluid>
                <Container>
                    <div className={styles.category}>
                        <p className={styles.topcenter}>CATEGORY</p>
                        <Title title="We Offer Best Services" />
                        <div className={styles.categories}>
                            {
                                categories.map((item) => (
                                    <div className={styles.centre}>
                                        <Image src={item.image} />
                                        <Title smalltitle={item.title} subtitle="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </Container>
                <Container>

                    <div className={styles.grid}>
                        <div className={styles.heroimage}>
                            <Image
                                src={illustration}
                                alt="hero-img"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div className={styles.herotitle}>
                            <p className={styles.topleft}>Honeymoon Specials</p>
                            <Title
                                title="Our Romantic Tropical Destinations"
                                subtitle="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                            />
                            <div className={styles.button}>
                                <Link href="/">
                                    <Button type="button" buttonType="primary">
                                        View Packages
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* <div className={styles.heroimageMobile}>
              <Image
                src={ImgMobile}
                alt="hero-img"
                style={{
                  width: "100%",
                  objectFit: "contain",
                  marginTop: "-10vh",
                }}
              />
            </div> */}

                    </div>

                </Container>


                <Container>

                    <div className={styles.grid}>

                        <div className={styles.herotitle}>
                            <p className={styles.topleft}>Fast & Easy</p>
                            <Title
                                title="Get Your Favourite
                                Resort Bookings"
                            />
                            <div>
                                <div className={styles.love}>
                                    <Image src={icon1} alt="icon1" />
                                    <div style={{ marginLeft: "2rem" }}>
                                        <Title smalltitle="Choose Destination" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." />
                                    </div>
                                </div>

                                <div className={styles.love}>
                                    <Image src={icon2} alt="icon2" />
                                    <div style={{ marginLeft: "2rem" }}>
                                        <Title smalltitle="Check Availability" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." />
                                    </div>
                                </div>

                                <div className={styles.love}>
                                    <Image src={icon3} alt="icon3" />
                                    <div style={{ marginLeft: "2rem" }}>
                                        <Title smalltitle="Let’s Go" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." />
                                    </div>
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.heroimage}>
                            <Image
                                src={illustration2}
                                alt="hero-img"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </div>



                    </div>

                </Container>
            </ContainerFluid>

        </section>
    )
}

export default Body;