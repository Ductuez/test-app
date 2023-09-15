import Image from "next/image";
import Header from "../components/Header/Header";
import IntroduceSection from "@/components/IntroduceSection/IntroduceSection";
import JokerSection from "@/components/JokerSection/JokerSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <IntroduceSection />
      <JokerSection />
      <Footer />
    </>
  );
}
