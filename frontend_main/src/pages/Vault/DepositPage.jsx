import { useEffect } from "react";
import { Link } from "react-router-dom";
import TitleSm from "../../components/Title/TitleSm";
import { color } from "../../theme";

import { useAddress, useShowConnectEmbed } from "@thirdweb-dev/react";
import { useLocation } from "react-router-dom";
import intraday from "../../assets/images/intraday.png";
import long_term from "../../assets/images/long_term.png";

function DepositPage() {
  const loginOptional = false;
  const location = useLocation();
  const answer = location.state;
  console.log(answer);
  const address = useAddress();
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  useEffect(() => {
    if (showConnectEmbed) {
      navigate("/", { replace: true });
    }
  }, [address]);

  return (
    <div className="h-screen flex items-center ">
      <div style={{ color: color.text }} className=" w-full">
        <div className="flex flex-col justify-center items-center my-10">
          <p className="text-2xl font-bold">Choose Payment Method?</p>
          {answer && (
            <p className="">
              Basend on your answer, you will yield {answer[0].slice(0, 3)}%
              returns
            </p>
          )}
        </div>
        <div className="flex flex-col items-center md:grid md:grid-cols-4 my-5 md:my-20">
          <div className="md:col-start-2 flex justify-center">
            <Link
              to="/deposit-form"
              className="flex flex-col  justify-center items-center w-56 md:w-64  h-60 md:h-72 rounded-xl my-3"
              style={{ backgroundColor: color.highlightbg }}
            >
              <img
                src={intraday}
                alt="intraday"
                className="w-28 h-28 md:w-44 md:h-44"
              />
              <div className="mb-2">
                <TitleSm>
                  Pay with any <br /> ERC20 token
                </TitleSm>
              </div>
            </Link>
          </div>
          <div className="md:col-start-3 flex justify-center">
            <Link
              to="/deposit-form"
              className=" flex flex-col  justify-center items-center w-56 md:w-64  h-60 md:h-72 rounded-xl my-3"
              style={{ backgroundColor: color.highlightbg }}
            >
              <img
                src={long_term}
                alt="long_term"
                className="w-28 h-28 md:w-44 md:h-44"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositPage;
