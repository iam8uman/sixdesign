import Steps from "@/components/Services/Steps";
import React from "react";
import crmImg from "@/../public/girl-smiling.png";
import Stats from "@/components/Stats/Stats";

const page = () => {
  return (
    <>
      <Steps it="CRM" img={crmImg.src} />
      <Stats />
    </>
  );
};

export default page;
