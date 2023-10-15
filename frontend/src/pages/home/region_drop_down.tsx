"use client";

import { Country, Region } from "$/prisma/prisma-client";
import React from "react";

type RegionDropDownProps = {
  item: Region & { Country: Country[] };
};

export default function RegionDropDown({ item }: RegionDropDownProps) {
  const [show_countries, set_show_countries] = React.useState<boolean>(false);

  return (
    <div className="px-2 py-2 border-b">
      <div className="flex justify-between">
        <a className="text-sm" href={`/home?region=${item.name}`}>
          {item.name}
        </a>

        <button onClick={() => set_show_countries(p => !p)}>
          <span className="material-symbols-outlined">
            arrow_drop_down
          </span>
        </button>
      </div>
      <ul className="pl-4">
        {show_countries && item.Country.map((x, i, a) => {
          return (
            <li
              key={x.id}
              className={`${i !== a.length - 1 ? "border-b" : ""}  py-2`}
            >
              <a className="text-sm" href={`/home?country=${x.name}`}>
                {x.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
