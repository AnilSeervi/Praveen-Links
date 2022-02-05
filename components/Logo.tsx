import Image from "next/image";
const Logo = () => {
  return (
    <div className="logo-wrapper">
      <Image src="/logo.jpg" alt="logo" layout="fill" />
    </div>
  );
};

export default Logo;
