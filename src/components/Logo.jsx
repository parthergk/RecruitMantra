
import img from "/images/logo_RM.png";

const Logo = () => (
  <div className="w-64 md:w-80 lg:w-96 p-4 transition-transform hover:scale-105">
    <img src={img} alt="logo" className="w-full h-auto object-contain" />
  </div>
);

export default Logo;
