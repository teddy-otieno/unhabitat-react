import React from "react";
import RegionList from "./region_list";
import { Region, server_url } from "../../utils";
import LogoutButton from "./logout_button";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [regions, set_regions] = React.useState<Region[]>([]);

  React.useEffect(() => {
    fetch(server_url + "/api/home/regions", { method: "GET" })
      .then((x) => x.json())
      .then(set_regions)
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <nav className="h-12 sticky top-0 z-10 px-4 flex justify-between background">
        <div className="h-full flex items-center">
          <a href="/home" className="primary-color font-medium text-xl ">
            UN-HABITAT
          </a>
          <div className="flex px-4 gap-4">
            <RegionList regions={regions} />
            <a href="/home?type=UN_REFORMS">Un Reforms</a>
            <a href="/home?type=SOUTH_CORPOPRATION">South Corporation</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <LogoutButton />
          <a className="primary-button" href="/home/programmes/add">
            Add Programme
          </a>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
