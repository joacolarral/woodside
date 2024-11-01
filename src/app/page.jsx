import Image from "next/image";
import BG_IMAGE from "@/app/images/bg_underconstruction.jpg";
import Logo from "@/app/components/Logo";
import styles from "./suplente.module.scss";
import IconWithText from "@/app/components/iconWithText";
import Whatsapp from "@/app/images/whatsapp.svg";
import Instagram from "@/app/images/zocalo_Logo_Ig.svg";
import Markup from "@/app/images/zocalo_locacion.svg";

const Info = [
  {
    icon: <Image src={Whatsapp} />,
    label: "+5492236207101",
    href: "https://wa.me/+5492236207101",
  },
  {
    icon: <Image src={Instagram} />,
    label: "Woodside Hostel",
    href: "https://www.instagram.com/woodsidemdq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    icon: <Image src={Markup} />,
    label: "Comechingones 15",
    href: "https://maps.app.goo.gl/8aohAGJXjPgCssZj7",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.bgImage}>
          <Image src={BG_IMAGE} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.content}>
          <h1>EN CONSTRUCCION...</h1>
          <div className={styles.information}>
            {Info.map((info, i) => (
              <IconWithText
                key={i}
                icon={info.icon}
                text={info.label}
                href={info.href}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
