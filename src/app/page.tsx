import Link from "next/link";
import Cabalgatas from "./containers/Cabalgatas";
import FirstPage from "./containers/FirstPage";
import Footer from "./containers/Footer";
import Habitaciones from "./containers/Habitaciones";
// import Sponsors from "./containers/Sponsors";
import Surftrip from "./containers/Surftrip";
import WS_Sessions from "./containers/WS_Sessions";
import WHASTAPP_LOGO from "@/app/images/whatsapp.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FirstPage />
      <Habitaciones />
      <Surftrip />
      <Cabalgatas />
      <WS_Sessions />
      {/* <Sponsors /> */}
      <Footer />
      <div className="whatsapp">
        <Link
          href="https://api.whatsapp.com/send/?phone=5492236207101&text&app_absent=0"
          target="_blank"
        >
          <Image src={WHASTAPP_LOGO} alt="Whatsapp" />
        </Link>
      </div>
    </>
  );
}
