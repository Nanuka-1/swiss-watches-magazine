export default function Newsletter() {
  return (
    <section
      className="
        mt-[309px]
        h-[477px]
        w-full
        bg-[#303030]
      "
    >
      <div
  className="
    mx-auto
    flex
    h-full
    w-[1276px]
    items-center
    gap-[22px]
  "
>
        {/* Video */}
        <div className="relative h-[357px] w-[626px] overflow-hidden">
  <img
    src="/images/newsletter-video.jpg"
    alt="Newsletter video preview"
    className="h-full w-full object-cover"
  />
</div>

        {/* Content */}
<div className="h-[357px] w-[628px]">
  {/* Newsletter heading */}
  <div className="h-[52px] w-[304px]">
    <h2
      className="
        h-[42px]
        w-[304px]
        text-[30px]
        font-semibold
        leading-[42px]
        text-white
      "
    >
      NEWSLETTER
    </h2>

    <div className="flex h-px w-[192px]">
      <span className="h-px w-[96px] bg-[#FBB64D]" />
      <span className="h-px w-[96px] bg-[#DDDDDD]" />
    </div>
  </div>

  {/* Exclusive Membership */}
<div className="mt-[40px]">
  <h3
    className="
      text-[24px]
      font-semibold
      leading-[36px]
      text-white
    "
  >
    EXCLUSIVE MEMBERSHIP
  </h3>

  <p
    className="
      mt-[10px]
      font-['Bitter']
      text-[16px]
      font-normal
      leading-[26px]
      text-[#DDDDDD]
    "
  >
    Every fortnight, our newsletter provides you with exciting news from
    the world of mechanical watches and the latest stories from our
    magazine.
  </p>
</div>
{/* Statistics */}
<div className="mt-[40px] flex h-[38px] w-[582px] items-start">

  {/* 25,000+ */}
  <div className="h-[38px] w-[120px]">
    <p className="text-[18px] font-semibold leading-[20px] text-white">
      25,000+
    </p>

    <p className="mt-[4px] text-[10px] font-normal leading-[14px] text-[#DDDDDD]">
      OUR SUBSCRIBERS
    </p>
  </div>

  {/* Separator */}
  <div className="relative h-[38px] w-[40px] shrink-0">
    <span
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-0
        h-[38px]
        w-px
        -translate-x-1/2
        bg-[#FBB64D]
      "
    />
  </div>

  {/* 100+ */}
  <div className="h-[38px] w-[120px]">
    <p className="text-[18px] font-semibold leading-[20px] text-white">
      100+
    </p>

    <p className="mt-[4px] text-[10px] font-normal leading-[14px] text-[#DDDDDD]">
      PREMIUM BRANDS
    </p>
  </div>

  {/* Separator */}
  <div className="relative h-[38px] w-[40px] shrink-0">
    <span
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-0
        h-[38px]
        w-px
        -translate-x-1/2
        bg-[#FBB64D]
      "
    />
  </div>

  {/* Weekly */}
  <div className="h-[38px] w-[108px]">
    <p className="text-[18px] font-semibold leading-[20px] text-white">
      WEEKLY
    </p>

    <p className="mt-[4px] text-[10px] font-normal leading-[14px] text-[#DDDDDD]">
      CURATED CONTENT
    </p>
  </div>

  {/* Separator */}
  <div className="relative h-[38px] w-[40px] shrink-0">
    <span
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-0
        h-[38px]
        w-px
        -translate-x-1/2
        bg-[#FBB64D]
      "
    />
  </div>

  {/* VIP */}
  <div className="h-[38px] w-[114px]">
    <p className="text-[18px] font-semibold leading-[20px] text-white">
      VIP
    </p>

    <p className="mt-[4px] text-[10px] font-normal leading-[14px] text-[#DDDDDD]">
      MEMBER BENEFITS
    </p>
  </div>

</div>
{/* Email */}
<div className="mt-[40px] flex items-center gap-[20px]">
  <input
    type="email"
    placeholder="Enter your email"
    className="
      h-[51px]
      w-[412px]
      border
      border-[#8A8A8A]
      bg-transparent
      px-[20px]
      font-['Jost']
      text-[18px]
      font-normal
      leading-[22px]
      text-[#DDDDDD]
      placeholder:text-[#DDDDDD]
      outline-none
    "
  />

  <button
  className="
    h-[51px]
    w-[196px]
    bg-[#F3F3F3]
    font-['Jost']
    text-[18px]
    font-medium
    uppercase
    text-[#090909]
    transition-colors
    duration-300
    hover:bg-[#BF985C]
    cursor-pointer
  "
>
  Subscribe
</button>
</div>
</div>
      </div>
    </section>
  );
}