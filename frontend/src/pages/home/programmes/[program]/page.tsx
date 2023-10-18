import React from "react";
import { useParams } from "react-router-dom";
import { Programme, server_url } from "../../../../utils";

export default function ViewProgramme() {
  const params = useParams();

  const [programme, set_programme] = React.useState<Programme | null>(null);

  React.useEffect(() => {
    console.log("INSIDE EFFECT");
    void (async () => {
      const p = await fetch(
        server_url + `/api/home/programmes/${params["id"]}`,
        {
          method: "GET",
        }
      ).then((x) => x.json());
      set_programme(p);
    })();
  }, [params]);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="w-1/2 flex flex-col gap-8">
        <img
          alt=""
          src={`data:image/png;base64;,${programme?.cover_image}`}
          className="w-full h-96 object-cover rounded-3xl"
        />
        <h1 className="font-bold text-center text-xl">{programme?.title}</h1>
        <h1 className="font-medium text-center text-sm">
          {programme?.description}
        </h1>
        <p>{programme?.content}</p>
      </div>
    </div>
  );
}
