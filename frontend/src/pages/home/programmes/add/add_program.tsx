"use client";
import React from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";
import {
  Country,
  Programme,
  Region,
  ThematicArea,
  server_url,
  ProgrammeType,
} from "../../../../utils";

const program_options = [
  { value: "GLOBAL", label: "Global" },
  { value: "REGION", label: "Region" },
  { value: "COUNTRY", label: "Country" },
  { value: "SOUTH_CORPORATION", label: "South Corporation" },
  { value: "UN_REFORMS", label: "Un Reforms" },
];

export default function AddProgram() {
  const search_params = new URLSearchParams(window.location.search);

  const [programme, set_programme] = React.useState<Programme | null>(null);
  const [countries, set_countries] = React.useState<Country[]>([]);
  const [thematic_areas, set_thematic_areas] = React.useState<ThematicArea[]>(
    []
  );
  const [regions, set_regions] = React.useState<Region[]>([]);

  React.useEffect(() => {
    const id = search_params.get("id");
    if (id) {
      fetch(server_url + "/api/home/programmes/" + id)
        .then((x) => x.json())
        .then(set_programme);
    }

    fetch(server_url + "/api/home/countries/", { method: "GET" })
      .then((x) => x.json())
      .then(set_countries)
      .catch((e) => console.error(e));

    fetch(server_url + "/api/home/thematicareas")
      .then((x) => x.json())
      .then(set_thematic_areas)
      .catch((e) => console.error(e));

    fetch(server_url + "/api/home/regions")
      .then((x) => x.json())
      .then(set_regions)
      .catch((e) => console.error(e));
  }, []);

  const router = useNavigate();

  const [program_markdown, set_programme_markdown] = React.useState<string>(
    programme?.content ?? ""
  );
  const [title, set_title] = React.useState<string>(programme?.title ?? "");
  const [description, set_description] = React.useState<string>(
    programme?.description ?? ""
  );
  const [program_type, set_program_type] = React.useState<ProgrammeType>(
    programme?.programme_type ?? "GLOBAL"
  );
  const [selected_item, set_selected_item] = React.useState<number>(0);
  const [selected_thematic_areas, set_selected_thematic_area] =
    React.useState<number>(0);
  const [cover_image, set_cover_image] = React.useState<string | null>(
    programme?.cover_image ?? null
  );
  const [country_id, set_country_id] = React.useState<number | undefined>(
    undefined
  );

  const submit_new_programme = async () => {
    if (programme === null) {
      try {
        const response = await fetch(
          server_url +
            "/api/home/programmes" +
            `?user_id=${window.localStorage.getItem("user_id")}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              region_id: selected_item,
              programme_type: program_type satisfies ProgrammeType,
              content: program_markdown,
              cover_image: cover_image,
              thematic_area: selected_thematic_areas,
              country: country_id,
            }),
          }
        );

        router("/home");
      } catch (e) {
        console.error(e);
      }

      return;
    }

    try {
      const response = await fetch(
        server_url +
          `/api/home/programmes/${programme.id}` +
          `?user_id=${window.localStorage.getItem("user_id")}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: title,
            description: description,
            region_id: selected_item,
            programme_type: program_type satisfies ProgrammeType,
            content: program_markdown,
            cover_image: cover_image,
            thematic_area: selected_thematic_areas,
            country: country_id,
          }),
        }
      );

      router("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="flex flex-col items-center h-full w-full"
      data-color-mode="light"
    >
      <div className=" flex flex-col gap-4 p-8 w-2/3">
        <form className="flex flex-col gap-4">
          <button
            className="primary-button"
            onClick={(e) => {
              e.preventDefault();
              submit_new_programme();
            }}
          >
            {programme ? "Edit Programme" : "Add Programme"}
          </button>
          <input
            type={"file"}
            onChange={(e) => {
              const file = e.target.files![0];
              const reader = new FileReader();
              reader.onload = (e) => {
                if (typeof reader.result === "string") {
                  set_cover_image(btoa(reader.result as string));
                }
              };
              reader.readAsBinaryString(file);
            }}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => set_title(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => {
              set_description(e.target.value);
            }}
          />

          <Select
            options={program_options}
            onChange={(e) => {
              set_program_type((e as any).value);
            }}
          />

          {program_type === "COUNTRY" ? (
            <>
              <div>
                <p className="text-sm">Select Country</p>
                <Select
                  options={countries.map((x) => {
                    return { value: x.id, label: x.name };
                  })}
                  onChange={(e) => {
                    set_selected_item(e?.value ?? 0);
                  }}
                />
              </div>
              <div>
                <p className="text-sm">Thematic Area</p>
                <Select
                  options={thematic_areas.map((x) => {
                    return { value: x.id, label: x.name };
                  })}
                  onChange={(e) => {
                    set_selected_thematic_area(e?.value ?? 0);
                  }}
                />
              </div>
            </>
          ) : null}

          {program_type === "REGION" ? (
            <>
              <div>
                <p className="text-sm">Select Region</p>
                <Select
                  options={regions.map((x) => {
                    return { value: x.id, label: x.name };
                  })}
                  onChange={(e) => {
                    set_selected_item(e?.value ?? 0);
                  }}
                />
              </div>
              <div>
                <p className="text-sm">Select Country</p>
                <Select
                  options={countries.map((x) => {
                    return { value: x.id, label: x.name };
                  })}
                  onChange={(e) => {
                    set_country_id(e?.value ?? 0);
                  }}
                />
              </div>
            </>
          ) : null}
          <textarea
            name="content"
            placeholder="Content"
            value={program_markdown}
            onChange={(e) => set_programme_markdown(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
