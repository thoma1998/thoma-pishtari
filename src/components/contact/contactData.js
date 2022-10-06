import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export const contactData = [
  {
    icon: <MdOutlineEmail className="contact__option-icon" />,
    title: "Email",
    describe: "thoma1998pishtari@gmail.com",
    link: "mailto:thoma1998pishtari@gmail.com",
  },
  {
    icon: <FiPhoneCall className="contact__option-icon" />,
    title: "Call",
    describe: "+355683432813",
    link: "tel:+355683432813",
  },
  {
    icon: <BsWhatsapp className="contact__option-icon" />,
    title: "WhatsApp",
    describe: "+355676201181",
    link: "https://api.whatsapp.com/send?phone=355676201181",
  },
];
