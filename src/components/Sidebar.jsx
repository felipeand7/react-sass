import SocialNetworkContainer from "./SocialNetworkContainer";

import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu6.png";

import "../style/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Felipe Andrade" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKNjKiSXacYEwAAAYkFr63ATF6Qfki3buWPqJ6j6ehj8EcVN55GGEfkz0JgjBL-o7sSTPGR1ZvrJnFmn3exZVFFtzA2QW-dUcWPZYULKt5MPfvaFZkXlTldIdZOn4go_jyJi-Xpfw5gBzakJINPutzZYB0w2YlJgsdue51iBYB0Yw_m30QgJXyz5hTPoatdp9lZJldNS5ZKP8HBRlbE_XamNONa4iVQfaKvAg-lHL69GKmFdesm6cfoIv1SC3tOPpqccHC2-pt0rzv1YMdufdRcqUowvuD50ohMK-B5jXxGqi-wWzkJCTsqXflM0utOlPJUjHH2Ni7vzaZQnMxlTTPm0PUtLqySEOYg9AzVt9wQRcXet4eO3hn656xpr_h_w0uD7J7KfKHUG8RHPHxxgoY_moo0zY4_CC-tkNXjv1uAdjAriWzumGNwt0C_jai1vLiJceNoFC3-ozXMR72Qu4yonfJpeCc8ZsU04feyhaM-TiPGS6CEN3qIph5lUX2ifWd86mx3pOH3KP-aOvIVLzKwnTscy2Ny40Bxu_DvXHMNldDSTThd4yaCsVjRu0brTKyUjQ&x-ambry-um-filename=Profile.pdf"
        className="btn"
      >
        Dowload curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
