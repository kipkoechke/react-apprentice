import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { EventDetails } from "@/types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const filePath = path.join(process.cwd(), "public", "db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const event = data.events.find((event: EventDetails) => event.id === id);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  return res.status(200).json(event);
}
