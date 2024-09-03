import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { sleep } from "@/lib/utils";
// import Contact from "@/components/Contact/form1";
// import ContactForm from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "",
  // other metadata
};

const ContactPage = async () => {
  await sleep(4000);

  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      {/* <Contact /> */}
      {/* Multistep form */}
      <Contact />
    </>
  );
};

export default ContactPage;
