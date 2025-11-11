"use server";

import { updateTag } from "next/cache";

export default async function refreshAction() {
  updateTag("posts");
}
