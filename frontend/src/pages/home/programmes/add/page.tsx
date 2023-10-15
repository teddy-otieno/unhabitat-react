import db from "$/lib/db";
import { PrismaClient } from "$/prisma/prisma-client";
import AddProgram from "./add_program";

export default async function AddPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const id = searchParams ? searchParams["id"] : null;
  let countries;
  let regions;
=
  let programme;

  if (id !== undefined && id !== null) {
    programme = await db.programme.findFirst({ where: { id: parseInt(id) } });
  }

  countries = await db.country.findMany();
  regions = await db.region.findMany();
  const thematic_areas = await db.thematicArea.findMany();
  return (
    <>
      <AddProgram
        countries={countries}
        regions={regions}
        thematic_area={thematic_areas}
        programme={programme ?? null}
      />
    </>
  );
}
