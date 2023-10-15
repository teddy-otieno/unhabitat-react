"use client";

import { Country, Region } from "$/prisma/prisma-client";
import React from "react";
import RegionDropDown from "./region_drop_down";

type RegionListProps = {
  regions: (Region & { Country: Country[] })[];
};

export default function RegionList({ regions }: RegionListProps) {
  const [show_regions, set_show_regions] = React.useState<boolean>(false);

  return (
    <div className="">
      <button
        onClick={() => {
          set_show_regions((p) => !p);
        }}
      >
        Where We Are
      </button>
      {show_regions ? (
        <div className="top-16 flex flex-col absolute top-0 background shadow rounded-lg">
          <div className="px-2 py-2 border-b">
            <a className="text-sm" href={`/home`}>
              {`Global`}
            </a>
          </div>
          {regions.map((x) => {
            return <RegionDropDown key={x.id} item={x} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
