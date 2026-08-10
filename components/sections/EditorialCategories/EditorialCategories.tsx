"use client";

import { categories } from "./categories";
import EditorialCategoryCard from "./EditorialCategoryCard";

export default function EditorialCategories() {
  return (
    <section
      className="
        mx-auto
        mt-[297px]
        flex
        h-[405px]
        w-full
        items-center
        justify-center
        bg-[#303030]
      "
    >
      <div
        className="
          flex
          w-[1273px]
          items-start
          justify-between
        "
      >
        {categories.map((item) => (
          <EditorialCategoryCard
            key={item.title}
            icon={item.icon}
            category={item.category}
            title={item.title}
            description={item.description}
            button={item.button}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}