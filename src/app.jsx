import React from 'react'
import youtube from './api/youtube'
import { SearchBar, VideoList, MainVideo } from './components'



class App extends React.Component {

	state = {
		video : [],
		selectVideo: null,
	}

	handleSubmit = async (searchTerm)=> {
		const response = await youtube.get('search',{ 
		params:{
			part:'snippet',
			maxResults:10,
			key:'AIzaSyCLVYPDxXIbAmG0WTsM9LOEAp8vN6s5xtA',
			q:searchTerm,
			}
		 })

		this.setState({
		 video:response.data.items,
		 selectVideo:response.data.items[0]
		})
	}

	componentDidMount(){
		this.handleSubmit('API google')
	}

	onVideoSelect = (video)=> {
		this.setState({selectVideo:video})
	}


	render() {
		
		const { video, selectVideo } = this.state

		return (
			<div className='App'>
				<div className="container bg-light">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-sm-12 justify-content-center">
								<SearchBar onFormSubmit={this.handleSubmit} />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8 col-sm-12">
								<MainVideo video={selectVideo} />
							</div>
							<div className="col-lg-4 col-sm-6 justify-content-center">
								<VideoList videos={video} onVideoSelect={this.onVideoSelect} />
							</div>
						</div>
					</div>
				<p style={{ background:'#ddd', height:'40px', width:'100%' }} className="text-muted text-center">Design by Hasan</p>
				</div> 
			</div>
		)
	}
}

export default App