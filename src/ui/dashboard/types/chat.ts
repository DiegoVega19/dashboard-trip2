import { StaticImageData } from "next/image";

export type Chat = {
  avatar: StaticImageData;
  name: string;
  text: string;
  time: number;
  textCount: number;
  color: string;
};
