"use client"
import { VideoFrameContext } from '@/app/_context/VideoFrameContext'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, {useContext, useEffect} from 'react'
import { toast } from 'sonner'

function SaveVideo() {
    const {videoid} = useParams();
    const { videoFrame, setVideoFrame } = useContext(VideoFrameContext);

    useEffect(()=>{
      videoid&&GetVideoData();
    }, [videoid])
    
    const saveVideo = async()=>{
        const result = await axios.put('/api/video', {
            videoId: videoid,
            videoData: videoFrame
        });
        toast("Video Saved!")
        console.log(result);
    }

    const GetVideoData = async()=>{
      const result = await axios.get('/api/video?videoId='+videoid);
      console.log(result.data);
      setVideoFrame(result?.data?.videoData);
    }

  return (
    <div>
        <Button variant="outline" onClick={()=>saveVideo()}>Save</Button>
    </div>
  )
}

export default SaveVideo;