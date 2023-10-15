import React from "react";
import { Programme, ThematicArea, User } from "../../../utils";
import { useNavigate, Link } from "react-router-dom";

type ProgramCardProps = {
  item: Programme & { author: User };
  interchange: boolean;
};

function ProgramCard({ item, interchange }: ProgramCardProps) {
  console.log(item);
  return (
    <a
      href={`/home/programmes/${item.id}`}
      className={`flex flex-col rounded-lg cursor-pointer gap-4 hover:rounded-2xl transition-all program-card ${
        interchange ? "flex-row-reverse" : ""
      }`}
    >
      <div className="px-2 py-4 flex flex-col gap-4">
        <p className="text-4xl text-gray-500 font-light">{item.title}</p>
        <div className="flex justify-between gap-8 ">
          <p className="text-md font-medium text-gray-500">
            {`${new Date(item.created).toLocaleDateString()}`}
          </p>
          <p className="text-gray-500">{item.description.slice(0, 100)}</p>
        </div>
      </div>
      <img
        src={`data:image/png;base64;,${item.cover_image}`}
        alt=""
        className="w-full rounded-lg transition-all object-cover border"
      />
    </a>
  );
}

type ListProgrammesProps = {
  programmes: (Programme & { author: User })[];
  thematic_areas: ThematicArea[];
  is_country: boolean;
};

export default function ListProgrammes({
  programmes,
  thematic_areas,
  is_country,
}: ListProgrammesProps) {
  const [selected_thematic_area, set_selected_thematic_area] =
    React.useState<number>(0);

  const [show_tables, set_show_tables] = React.useState<boolean>(false);

  return (
    <>
      {/**Thematic Areas */}
      {is_country ? (
        <div className="flex flex-col gap-2 items-center mb-16">
          <div className="flex gap-2 flex-wrap w-2/3">
            <button
              className="text-md py-2 px-4 border rounded-full bg-white"
              onClick={() => set_selected_thematic_area(0)}
            >
              All
            </button>
            {thematic_areas.map((x) => {
              return (
                <button
                  key={x.id}
                  className={`text-md py-2 px-4 border rounded-full hover:shadow-lg transition-all bg-white ${
                    selected_thematic_area === x.id ? "bg-blue-50" : ""
                  }`}
                  onClick={() => set_selected_thematic_area(x.id)}
                >
                  {x.name}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
      {/**End Thematic Areas */}
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-end">
          <button onClick={() => set_show_tables((p) => !p)}>
            <span className="material-symbols-outlined">table_rows</span>
          </button>
        </div>

        {!show_tables ? (
          <div className="w-2/3 h-full grid grid-cols-2 gap-x-32 items-center gap-8">
            {programmes
              .filter((x) => {
                if (selected_thematic_area === 0) return true;
                return x.thematicAreaId === selected_thematic_area;
              })
              .map((x, i) => {
                return (
                  <ProgramCard
                    key={x.id}
                    interchange={i % 2 === 0}
                    item={x as Programme & { author: User }}
                  />
                );
              })}
          </div>
        ) : (
          <PrintTableInRows programmes={programmes} />
        )}
      </div>
    </>
  );
}

type PrintTableInRowsProps = {
  programmes: (Programme & { author: User })[];
};

function PrintTableInRows({ programmes }: PrintTableInRowsProps) {
  const navigate = useNavigate();

  const delete_programme = async (id: number) => {
    const response = await fetch(`/api/programmes/${id}`, { method: "DELETE" });

    if (response.status === 200) {
      navigate("/home");
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="px-4 border-b py-4">ID</th>
            <th className="px-4 border-b py-4">Title</th>
            <th className="px-4 border-b py-4">Created At</th>
            <th className="px-4 border-b py-4">Thematic Area</th>
            <th className="px-4 border-b py-4">Type</th>
            <th className="px-4 border-b py-4">Author</th>
            <th className="px-4 border-b py-4">Edit</th>
            <th className="px-4 border-b py-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {programmes.map((x) => {
            return (
              <tr
                key={x.id}
                onClick={() => {
                  navigate(`/home/programmes/${x.id}`);
                }}
              >
                <td className="px-4 border-b py-4 cursor-pointer">
                  <Link to={`/home/programmes/${x.id}`}>{x.id}</Link>
                </td>
                <td className="px-4 border-b py-4">{x.title}</td>
                <td className="px-4 border-b py-4">
                  {new Date(x.created).toLocaleDateString()}
                </td>
                <td className="px-4 border-b py-4">
                  {x.thematicAreaId ?? "N/A"}
                </td>
                <td className="px-4 border-b py-4">{x.programme_type}</td>
                <td className="px-4 border-b py-4">{x.author.email}</td>
                <td>
                  <a
                    className="w-full h-full"
                    href={`/home/programmes/add?id=${x.id}`}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </a>
                </td>
                <td>
                  <button
                    className="w-full h-full"
                    onClick={() => {
                      delete_programme(x.id);
                    }}
                  >
                    <span className="material-symbols-outlined text-red-500">
                      delete
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
