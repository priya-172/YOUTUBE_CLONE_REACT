import React from 'react'

const VideoCard = ({info}) => {
    if (!info || !info.snippet) {
        return <div>Invalid video information</div>;
      }
    console.log(info);
    const {snippet,statistics,localized
    }=info;
    if (!snippet) {
        return <div>No video snippet available</div>;
      }
    const {channelTitle, title ,thumbnails}= snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='align-left rounded-lg' alt="videos" src= {thumbnails?.medium?.url}/>
        <ul>
            <li className='text-left text-lg font-bold py-1'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
            <li>.{localized?.publishedAt}</li>
        </ul>

    </div>
  );
};
export const RedBorderVideoCard=({info}) =>{
return (
<div className='p-1 m-1 border-blue-500'>
  <VideoCard info={info}/>
</div>
);
};
export default VideoCard;
