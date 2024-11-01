import Image from "next/image";
import Link from "next/link";

// import Woodside_Logo from "@/app/images/woodside_logo.svg";
import ANCHOR_MAP_LOGO from "@/app/images/zocalo_locacion.svg";
import INSTAGRAM_LOGO from "@/app/images/zocalo_Logo_Ig.svg";
import YOUTUBE_LOGO from "@/app/images/zocalo_Logo_YTube.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <Image width={100} src={Woodside_Logo} alt="Woodside Logo" /> */}
      <div className={styles.sectionBrandSectionContainer}>
        <Link target="_blank" href="https://www.instagram.com/woodsidemdq/">
          <Image src={INSTAGRAM_LOGO} alt="Instagram" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=JFzP6irfy0k"
        >
          <Image src={YOUTUBE_LOGO} alt="Youtube" />
        </Link>

        <Link
          className={styles.linksText}
          href="https://maps.app.goo.gl/BQMukcdhyQKdZTZZ8"
        >
          <Image src={ANCHOR_MAP_LOGO} alt="Anchor map" />
          <p>Comechingones 22431, Mar del Plata, Argentina 7600</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
