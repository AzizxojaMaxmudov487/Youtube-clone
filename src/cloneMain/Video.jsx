import React, { useState } from 'react';

const Video = ({ video: { id: { videoId }, snippet: { title, channelTitle, description, publishTime } } }) => {

     const [count, setCount] = useState(0)
     const [discount, setDisCount] = useState(0)

     const [color, setColor] = useState('')
     const [hateColor, setHateColor] = useState('')

     const handleButtonClick = () => {
          if (count === 0) {
               setCount(1);
               setDisCount(0)
               setColor('red')
               setHateColor('')
          }
          else {
               setCount(0);
               setColor('')
          }
     };

     const handleButtonClick2 = () => {
          if (discount === 0) {
               setDisCount(1);
               setCount(0)
               setColor('')
               setHateColor('red')
          } else {
               setDisCount(0);
               setHateColor('')
          }
     }

     if (!videoId) return <p className="noResult">No Results</p>;
     const videoSrc = `https://www.youtube.com/embed/${videoId}`;
     return (
          <>
               <div className="videoIframe">
                    <iframe
                         frameBorder="0"
                         allowFullScreen
                         title="Video player"
                         src={videoSrc}
                    />
               </div>
               <div className='videoLike'>
                    <div className='like'>
                         <i class="fa-solid fa-thumbs-up" onClick={handleButtonClick} style={{color: color}}></i>
                         <span>
                              {publishTime.slice(5,5) !== 0 ? publishTime.slice(5,7) + count + 'K' : null}
                         </span>
                    </div>
                    <div className="dislike" >
                         <i class="fa-solid fa-thumbs-down" onClick={handleButtonClick2} style={{color: hateColor}}></i>
                         <span>
                         {publishTime.slice(2,3) + discount }
                         </span>
                    </div>
               </div>
               <div className="videoInfo">
                    <h1 className="titleVideo">{title}</h1>
                    <h3 className="channelTitle">{channelTitle}</h3>
                    <h3 className='channelPublish'>Published: {publishTime.slice(0, 10)} - {publishTime.slice(11, 19)}</h3>
                    <p className="descriptionVideo">{description}</p>
               </div>
          </>
     );
};

export default Video;