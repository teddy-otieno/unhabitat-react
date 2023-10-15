export const server_url = "http://localhost:3000";

export type Region = {
  id: number;
  name: string;
  description: string;
};

export type Country = {
  id: number;
  name: string;
  description: string;
  regionId: number;
};

export type ThematicArea = {
  id: number;
  name: string;
  descrviption: string;
};

export type Programme = {
  id: number;
  programme_type: ProgrammeType;
  region_id: number;
  cover_image: string;
  title: string;
  description: string;
  content: string;
  created: Date;
  authorId: number;
  thematicAreaId: number | null;
  countryId: number | null;
};

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export type ProgrammeType =
  | "GLOBAL"
  | "COUNTRY"
  | "REGION"
  | "UN_REFORMS"
  | "SOUTH_CORPOPRATION";
