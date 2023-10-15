import { Programme, ThematicArea, server_url } from "../../utils";
import HomeLayout from "./layout";
import ListProgrammes from "./programmes/list_programs";
import React from "react";
import Background from "../../assets/dash.png";

export default function HomePage() {
  const searchParams = new URL(document.location as string)
    .searchParams as URLSearchParams;
  console.log(searchParams);

  const [label, set_label] = React.useState<string>("");
  const [programmes, set_programmes] = React.useState<Programme[]>([]);
  const [thematic_areas, set_thematic_areas] = React.useState<ThematicArea[]>(
    []
  );

  const is_country =
    searchParams !== undefined &&
    searchParams.get("country") !== undefined &&
    searchParams.get("country") !== null
      ? true
      : false;

  React.useEffect(() => {
    fetch(server_url + "/api/home/programmes" + "?" + searchParams.toString())
      .then((x) => x.json())
      .then((j) => {
        set_programmes(j.programmes);
        set_label(j.label);
      })
      .catch((e) => console.error(e));

    fetch(server_url + "/api/home/thematicareas")
      .then((x) => x.json())
      .then(set_thematic_areas)
      .catch((e) => console.error(e));
  }, []);

  return (
    <HomeLayout>
      <main className="flex flex-col min-h-screen w-full">
        <div className="p-8 flex flex-col gap-8 items-center">
          <div
            className={` bg-black/50 w-full h-96 flex items-center justify-center rounded-lg shadow-lg bg-blend-darken hover:bg-blend-normal transition-all`}
            style={{
              backgroundImage: `url('${Background}')`,
            }}
          >
            <h1 className="text-5xl font-bold  text-white">{label}</h1>
          </div>
          <ListProgrammes
            programmes={programmes as any}
            thematic_areas={thematic_areas}
            is_country={is_country}
          />
        </div>
      </main>
    </HomeLayout>
  );
}
