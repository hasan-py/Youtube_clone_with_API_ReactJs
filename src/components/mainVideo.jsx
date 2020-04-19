import React from 'react'

const MainVideo = ({ video }) => {

  if (!video) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
		
		console.log(video.snippet)

		return (
			<div className='App'>
				<div className="position-sticky">
					<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" title="Video Player" src={videoSrc} ></iframe>
					</div>
					<div>
						<h3>{video.snippet.title}</h3>
						<h5 className="text-muted" >{video.snippet.channelTitle}</h5>
						<p className="lead">{video.snippet.description}</p>
					</div>
				</div>
			</div>
		)
	}


export default MainVideo