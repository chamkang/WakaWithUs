import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3 select-none group">
      <Image
        src="/images/logo-mark.png"
        alt="WakaWithUs"
        width={48}
        height={48}
        className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <span className="font-playfair font-bold text-white text-18 sm:text-22 leading-none tracking-tight">
        Waka<span className="text-clay">WithUs</span>
      </span>
    </Link>
  );
};

export default Logo;
