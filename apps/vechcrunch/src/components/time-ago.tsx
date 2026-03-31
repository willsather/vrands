"use client";

import { useEffect, useState } from "react";

import { formatTimeSince } from "@/lib/utils";

export function TimeAgo({ date }: { date: Date }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(formatTimeSince(date));
  }, [date]);

  return <time dateTime={date.toISOString()}>{text}</time>;
}
