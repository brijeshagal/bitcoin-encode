import Heading from "../../components/Heading";
import PortfolioCardIntra from "./PortfolioCardIntra";
import PortfolioCardLong from "./PortfolioCardLong";

function Portfolio() {
  return (
    <>
      <p className="text-center text-4xl font-bold mt-8">Your Portfolio</p>
      <Heading text="Intraday Vault" />
      <PortfolioCardIntra />
      <Heading text="Long Term Vault" />
      <PortfolioCardLong />
    </>
  );
}

export default Portfolio;
