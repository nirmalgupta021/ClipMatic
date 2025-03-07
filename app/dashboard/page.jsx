"use client";
import React, { useState } from "react";
import VideoCreateOption from "./_components/VideoCreateOption";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Workspace</h2>
      {videoList.length == 0 && <VideoCreateOption />}
    </div>
  );
}

export default Dashboard;