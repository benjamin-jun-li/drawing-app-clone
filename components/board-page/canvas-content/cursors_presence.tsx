"use client";
import { memo } from "react";
import { useOthersConnectionIds, useOthersMapped } from "@/liveblocks.config";
import Cursor from "./canvas_gadgets/cursor";
import { shallow } from "@liveblocks/client";
import Path from "./layers/path";
import { Over_the_Rainbow } from "next/font/google";
import { colorToHex } from "@/lib/utils";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return ids.map((connID) => <Cursor key={connID} connectionID={connID} />);
};

const Drafts = () => {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      penColor: other.presence.penColor,
    }),
    shallow
  );

  return (others.map(([key, other]) => {
    if (other.pencilDraft) return (
      <Path 
        key={key}
        x={0}
        y={0}
        points={other.pencilDraft}
        fill={other.penColor ? colorToHex(other.penColor) : "#eee"}
      />
    )
    return null;
  }))
};

const CursorsPresence = memo(() => {
  return (
    <>
      <Drafts />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
export default CursorsPresence;
