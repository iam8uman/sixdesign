import Image from "next/image";
import React from "react";
import Imgone from "@/../public/girl-smiling.png";
import Steps from "@/components/Services/Steps";

const page = ({}) => {
  return (
    <>
      <Steps it="MLS" img={Imgone.src} />
    </>
  );
};

export default page;
