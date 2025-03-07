"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { Player } from "@remotion/player";
import { MyComposition } from "@/remotion/Composition";
import RemotionComposition from "./RemotionComposition";
import { Fullscreen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";

function RemotionPlayer() {
  const { videoFrame, setVideoFrame } = useContext(VideoFrameContext);
  const [screenSize, setScreenSize] = useState({
    width: 500,
    height: 300,
  });

  const playerRef = useRef(null);

  useEffect(() => {
    if (videoFrame?.selectedFrame) {
      let skipDuration = 0;
      for (let i = 0; i < videoFrame?.selectedFrame; i++) {
        skipDuration = skipDuration + videoFrame.frameList[i].duration;
      }
      playerRef?.current?.seekTo(skipDuration * 30);
    }
  }, [videoFrame?.selectedFrame]);

  return (
    <div>
      <div className="flex items-center justify-center">
        {videoFrame?.totalDuration && (
          <Player
            ref={playerRef}
            component={RemotionComposition}
            durationInFrames={Number(videoFrame?.totalDuration * 30)}
            compositionWidth={screenSize.width}
            compositionHeight={screenSize.height}
            fps={30}
            controls
            style={{
              borderRadius: 6,
              width: "100%",
              height: 300,
            }}
            inputProps={{
              frameList: videoFrame?.frameList,
            }}
          />
        )}
      </div>

      <div className="mt-5 flex gap-2 items-center px-40">
        <Fullscreen />
        <Select onValueChange={(v) => setScreenSize(JSON.parse(v))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>
              1:1
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>
              16:9
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>
              9:16
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default RemotionPlayer;
