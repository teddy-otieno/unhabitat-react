import { PrismaClient } from "./prisma-client";

const client = new PrismaClient();

const COUNTRIES = [
  "Angola",
  "Kenya",
  "Nigeria",
  "Botswana",
  "Cabo Verde",
  "Cameroon",
  "Chad",
  "Comoros",
  "Democratic Republic of Congo",
  "Ethiopia",
  "Ghana",
  "Guinea",
  "Guinea Bissau",
  "Madagascar",
];

const REGIONS = [
  "African Region",
  "Asia and the Pacific Region",
  "Arab State Region",
  "Latin America and the Caribean Region",
  "Europe",
  "North America",
];

const THEMATIC_AREAS = [
  "Urban Basic Services",
  "Housing and Slum Upgrading",
  "Urban Legislation, Land and Governance",
  "Risk Reduction and Rehabilitation",
  "Urban Research and Capacity Development",
  "Urban Economy and Municipal Finance",
  "Urban Planning and Design",
];

export async function main() {
  console.log("Seeding db");

  for (let i = 0; i < THEMATIC_AREAS.length; i++) {
    await client.thematicArea.create({
      data: {
        name: THEMATIC_AREAS[i],
      },
    });
  }

  //return;

  for (let i = 0; i < REGIONS.length; i++) {
    await client.region.create({
      data: {
        name: REGIONS[i],
      },
    });
  }

  for (let i = 0; i < COUNTRIES.length; i++) {
    const region = await client.region.findFirst({
      where: { name: REGIONS[0] },
    });

    await client.country.create({
      data: {
        name: COUNTRIES[i],
        regionId: region!.id,
      },
    });
  }

  process.exit(0);
}

main();
