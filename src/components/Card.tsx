import FaRegularHandshake from "@icons/FaRegularHandshake";
import FaRegularMap from "@icons/FaRegularMap";
import type { Card } from "@pages/data";
import clsx from "clsx";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  card: Card;
}

const icons = {
  handshake: FaRegularHandshake,
  map: FaRegularMap,
};

export function Card({ card, className, ...props }: Props) {
  const { href, target, title, description, icon, tags = [] } = card;
  const Icon = icons[icon as keyof typeof icons];

  return (
    <a
      href={href}
      className={clsx([
        "flex flex-col py-6 px-8 bg-white rounded-xl shadow-md hover:shadow-xl",
        "hover:-translate-y-2 transition-all duration-300 text-center",
        "break-inside-avoid aria-disabled:hidden mb-6",
      ])}
      data-aos="fade-up"
      data-aos-delay="100"
      target={target}
      {...props}
    >
      {Icon && (
        <div
          className={clsx([
            "flex justify-center items-center mb-4",
            "bg-blue-100 rounded-full w-16 h-16 mx-auto",
          ])}
        >
          <Icon className="fa-2x text-blue-700 size-8" />
        </div>
      )}
      <h2 className="text-xl font-semibold text-blue-700 mb-2 block">
        {title}
      </h2>
      <p className="text-base leading-relaxed">{description}</p>
      {tags && tags?.length > 0 && (
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
