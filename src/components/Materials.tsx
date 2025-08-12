import type { Card } from "@pages/data";
import clsx from "clsx";
import { Card as _Card } from "./Card";
import { useState } from "react";

interface Props {
  tags: string[];
  materials: Card[];
};

export default function Materials({ tags, materials }: Props) {
  const [selected, setSelected] = useState("Todos");

  return (
    <>
      <div
        id="tags-filter"
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {tags.map((tag) => (
          <button
            id="tag-filter"
            onClick={() => setSelected(tag)}
            className={clsx([
              "px-5 py-2 rounded-full text-base font-medium transition-all bg-blue-100 cursor-pointer",
              tag === selected && "bg-blue-600 text-white hover:bg-blue-700 shadow-md", 
              tag !== selected && "text-blue-800 hover:bg-blue-200 hover:text-blue-900"
            ])}
          >{tag}</button>
        ))}
      </div>
      <div id="materials-list" className="mx-auto columns-1 md:columns-2 gap-6">
        {materials.filter((card) => selected === "Todos" || card.tags?.includes(selected)).map((card) => <_Card key={card.title + "___" + card.href} card={card}/>)}
      </div>
    </>
  );
};