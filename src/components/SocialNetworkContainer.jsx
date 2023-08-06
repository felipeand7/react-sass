import "../style/components/socialnetworkcontainer.sass"


import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";


const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "whatsapp", icon: <FaWhatsapp /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
       <a href={network.name === "linkedin" ? "https://www.linkedin.com/in/felipe-andrade-75b517232/" : network.name === "github" ? "https://github.com/felipe0402" : "https://wa.me/556298407863"} className="social-btn" id={network.name} key={network.name}>
       {network.icon}
     </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;