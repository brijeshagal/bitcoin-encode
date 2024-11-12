import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import TitleSm from "../../components/Title/TitleSm";
import { color } from "../../theme";

import { useAddress, useShowConnectEmbed } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import intraday from "../../assets/images/intraday.png";
import long_term from "../../assets/images/long_term.png";

function VaultOptions() {
  const address = useAddress();
  const navigate = useNavigate();
  const loginOptional = false;
  const showConnectEmbed = useShowConnectEmbed(loginOptional);

  useEffect(() => {
    if (showConnectEmbed) {
      navigate("/", { replace: true });
    }
  }, [address]);

  const checkForQuestion = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard/getUserData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: address }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        toast.error(json.msg);
      } else {
        console.log(json);
        if (json.user.answer.length === 0) {
          navigate("/get-started", {
            state: address,
          });
        } else {
          navigate("/deposit-page");
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="h-screen flex items-center ">
      <div style={{ color: color.text }} className=" w-full">
        <div>
          <Title>Choose Investment Track?</Title>
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
                <TitleSm>Intraday</TitleSm>
              </div>
            </Link>
          </div>
          <div className="md:col-start-3 flex justify-center">
            <Link
              onClick={checkForQuestion}
              className=" flex flex-col  justify-center items-center w-56 md:w-64  h-60 md:h-72 rounded-xl my-3"
              style={{ backgroundColor: color.highlightbg }}
            >
              <img
                src={long_term}
                alt="long_term"
                className="w-28 h-28 md:w-44 md:h-44"
              />
              <div className="mb-2">
                <TitleSm>Long Term</TitleSm>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaultOptions;
