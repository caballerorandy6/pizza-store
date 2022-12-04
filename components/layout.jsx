import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="fixed h-screen w-full ">
      <Image
        src="/img/bg.jpg"
        alt="background image"
        fill
        priority
        objectFit="cover"
      />
      {children}
    </div>
  );
};

export default Layout;
