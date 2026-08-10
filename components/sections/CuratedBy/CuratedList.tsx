"use client";

import CuratedListItem from "./CuratedListItem";

type CuratedListItemData = {
  id: number;
  image: string;
  title: string;
  author: string;
};

type CuratedListProps = {
  items: CuratedListItemData[];
};

export default function CuratedList({ items }: CuratedListProps) {
  return (
    <div className="flex h-[402px] w-[628px] flex-col gap-[21px]">
      {items.map((item) => (
        <CuratedListItem
          key={item.id}
          image={item.image}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
}