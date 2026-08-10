import Image from "next/image";
import { navItems } from "../../../constants/navigation";
import Logo from "@/components/ui/Logo/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-[1366px] px-[45px]">
        <div className="flex h-[80px] items-center justify-between border-b border-[#D6D6D6]">
          <Logo />

          <div className="flex h-[22px] items-center gap-[20px]">
  <button type="button" aria-label="Search" className="flex h-[22px] w-[19px] items-center justify-center p-0">
    <Image src="/images/search.svg" alt="" width={19} height={22} />
  </button>

  <button type="button" aria-label="User account" className="flex h-[22px] w-[20px] items-center justify-center p-0">
    <Image src="/images/user.svg" alt="" width={20} height={22} />
  </button>

  <button
    type="button"
    className="flex h-[22px] w-[76px] items-center justify-center p-0 text-[14px] font-normal uppercase leading-none tracking-[0] text-[#090909] whitespace-nowrap"
  >
    Follow us
  </button>

  <div className="flex h-[22px] w-[60px] overflow-hidden rounded-[3px] border border-[#090909]">
    <button className="h-[22px] w-[30px] bg-[#090909] p-0 text-[14px] font-normal leading-none text-[#BF985C]">
      EN
    </button>

    <button className="h-[22px] w-[30px] bg-white p-0 text-[14px] font-normal leading-none text-[#090909]">
      DE
    </button>
  </div>
</div>
        </div>

        <nav className="flex h-[50px] items-start justify-center gap-[28px] border-b border-[#D6D6D6] pt-[15px] text-[14px] font-normal leading-none tracking-[0] text-[#090909]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex h-[20px] items-center gap-[8px] transition-colors hover:text-[#BF985C]"
            >
              {item.label}

              {item.hasDropdown && (
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  width={9}
                  height={5}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}