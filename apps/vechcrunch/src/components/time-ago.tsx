"use client";

import { formatTimeSince } from "@/lib/utils";

export function TimeAgo({ date }: { date: Date }) {
  return <time>{formatTimeSince(date)}</time>;
}
