import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen max-h-full bg-[#0a2742] text-white p-10 grid gird-cols-1 lg:grid-cols-2">
      <div className="text-center lg:text-left w-full pb-10 lg:pb-0">
        <Link href="/"><Image
          width={220}
          height={60}
          alt="aNANt Logo"
          src="https://ik.imagekit.io/iiscvsmanipal/anantLogo_jDpZAhBDXG9.png?updatedAt=1638595324436"
          className="cursor-pointer"
        /></Link>
        <p className="text-gray-300">A functional materials database</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col mx-auto lg:mx-0">
          <Link href="/"><h2 className="cursor-pointer font-bold pb-1">aNANt</h2></Link>
          <Link href="/team">
            <a className="hover:underline">Meet the team</a>
          </Link>
          <Link href="/privacypolicy">
            <a className="hover:underline">Privacy Policy</a>
          </Link>
          <Link href="/termsandconditions">
            <a className="hover:underline">Terms and Conditions</a>
          </Link>
        </div>
        <div className="flex flex-col mx-auto lg:mx-0">
          <h2 className="font-bold pb-1">Important Links</h2>
          <Link href="/contact">
            <a className="hover:underline">Contact us</a>
          </Link>
          <Link href="http://www.mrc.iisc.ac.in/">
            <a className="hover:underline">Material Research Center, IISc</a>
          </Link>
          <Link href="https://iisc.ac.in/">
            <a className="hover:underline">Indian Institute of Science</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
