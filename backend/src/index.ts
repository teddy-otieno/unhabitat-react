import express from "express";
import {
  PrismaClient,
  Programme,
  ProgrammeType,
  ThematicArea,
  User,
} from "../prisma/prisma-client";
import cors from "cors";

const db = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "1Gb" }));
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

type LoginCredentials = {
  username: string;
  password: string;
};

app.post("/api/accounts/login", async (req, res) => {
  const login_creds: LoginCredentials = await req.body;

  const user = await db.user.findFirst({
    where: {
      username: login_creds.username,
      password: login_creds.password,
    },
  });

  if (user === null) {
    res.status(400);
    res.json({ data: "Username or password incorrect" });
    return;
  }

  return res.json({ user_id: user.id });
});

type NewUser = {
  username: string;
  name: string;
  email: string;
  password: string;
};

app.post("/api/accounts/signup", async (req, res) => {
  const user: NewUser = await req.body;

  const new_user = await db.user.create({
    data: {
      username: user.username,
      password: user.password,
      email: user.email,
    },
  });

  res.json(new_user);
});

app.get("/api/home/regions", async (req, res) => {
  const regions = await db.region.findMany({
    where: {
      // name: searchParams["region"],
    },
    include: {
      Country: true,
    },
  });

  res.json(regions);
});

app.get("/api/home/countries", async (req, res) => {
  const countries = await db.country.findMany();
  res.json(countries);
});

app.get("/api/home/thematicareas", async (req, res) => {
  const thematic_areas = await db.thematicArea.findMany();
  res.json(thematic_areas);
});

app.get("/api/home/regions", async (req, res) => {
  const regions = await db.region.findMany();
  res.json(regions);
});

export type NewProgramme = {
  title: string;
  description: string;
  region_id: number;
  programme_type: ProgrammeType;
  content: string;
  thematic_area: number;
  cover_image: string;
  country?: number;
};

app.post("/api/home/programmes/", async (req, res) => {
  const search_params = req.query as any;
  const p: NewProgramme = await req.body;

  const user_id = search_params.user_id;

  console.log(search_params.user_id);

  if (user_id === undefined) {
    return res.json({ data: "Failed" });
  }

  const author = await db.user.findFirst({
    where: {
      id: parseInt(user_id),
    },
  });

  if (author === null) {
    console.log(author);
    res.json({ data: "Failed at author" });
    return;
  }

  if (p.programme_type === "GLOBAL") {
    const new_programme = await db.programme.create({
      data: {
        title: p.title,
        content: p.content,
        cover_image: p.cover_image,
        description: p.description,
        programme_type: p.programme_type,
        region_id: p.region_id,
        author: {
          connect: {
            id: parseInt(user_id),
          },
        },
      },
    });
    return res.json(new_programme);
  }

  if (p.programme_type === "REGION") {
    const new_programme = await db.programme.create({
      data: {
        title: p.title,
        content: p.content,
        cover_image: p.cover_image,
        description: p.description,
        programme_type: p.programme_type,
        region_id: p.region_id,
        country: {
          connect: {
            id: p.country,
          },
        },
        author: {
          connect: {
            id: parseInt(user_id),
          },
        },
      },
    });
    res.json(new_programme);
    return;
  }

  if (p.programme_type === "COUNTRY") {
    const new_programme = await db.programme.create({
      data: {
        title: p.title,
        content: p.content,
        cover_image: p.cover_image,
        description: p.description,
        programme_type: p.programme_type,
        region_id: p.region_id,
        thematic_area: {
          connect: {
            id: p.thematic_area,
          },
        },
        author: {
          connect: {
            id: parseInt(user_id),
          },
        },
      },
    });

    res.json(new_programme);
    return;
  }

  if (p.programme_type === "SOUTH_CORPOPRATION") {
    const new_programme = await db.programme.create({
      data: {
        title: p.title,
        content: p.content,
        cover_image: p.cover_image,
        description: p.description,
        programme_type: p.programme_type,
        region_id: 0,
        author: {
          connect: {
            id: parseInt(user_id),
          },
        },
      },
    });

    res.json(new_programme);
    return;
  }

  if (p.programme_type === "UN_REFORMS") {
    const new_programme = await db.programme.create({
      data: {
        title: p.title,
        content: p.content,
        cover_image: p.cover_image,
        description: p.description,
        programme_type: p.programme_type,
        region_id: 0,
        author: {
          connect: {
            id: parseInt(user_id),
          },
        },
      },
    });

    res.json(new_programme);
    return;
  }
});

app.get("/api/home/programmes", async (req, res) => {
  const searchParams = req.query as any;

  const _: ThematicArea | null = null;
  let programmes: Programme[] = [];
  let label = "";
  const is_country =
    searchParams !== undefined &&
    searchParams["country"] !== undefined &&
    searchParams["country"] !== null
      ? true
      : false;

  if (searchParams ? searchParams["country"] : false) {
    label = "Country " + searchParams!["country"];

    const c = await db.country.findFirst({
      where: { name: searchParams!["country"] },
    });

    programmes = await db.programme.findMany({
      where: {
        programme_type: "COUNTRY",
        region_id: c?.id ?? -1,
      },
      include: {
        author: true,
      },
    });
  } else if (searchParams ? searchParams["region"] : false) {
    label = "Region " + searchParams!["region"];

    const r = await db.region.findFirst({
      where: {
        name: searchParams!["region"],
      },
    });

    const temp = await db.programme.findMany({
      where: {
        programme_type: "REGION",
        region_id: r?.id,
      },
      include: {
        author: true,
      },
    });
    programmes = temp;
  } else if (searchParams ? searchParams["type"] : false) {
    const temp = await db.programme.findMany({
      where: { programme_type: searchParams!["type"] as ProgrammeType },
      include: { author: true },
    });
    programmes = temp;
  } else {
    label = "Global Programmes";
    programmes = await db.programme.findMany({
      where: {
        programme_type: "GLOBAL",
      },
      include: {
        author: true,
      },
    });
  }

  res.json({ programmes: programmes, label: label });
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
