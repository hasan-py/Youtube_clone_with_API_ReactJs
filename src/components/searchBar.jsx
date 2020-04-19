import React from 'react'

class SearchBar extends React.Component {

	state = {
		searchTerm : '',
	}

	handleChange = (event)=>{
		this.setState({searchTerm: event.target.value})
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		const { searchTerm } = this.state
		const { onFormSubmit } = this.props
		onFormSubmit(searchTerm)
	}

	render() {
		return (
			<div className='App'>
				<div className="my-3">
					<nav className="navbar navbar-light bg-danger text-light">
					  <a className="navbar-brand text-light" href="/" >Youtube Api App</a>
					  <form className="form-inline" onSubmit={this.handleSubmit} >
					    <input className="form-control mr-sm-2" type="search" placeholder="Search Youtube Vdeo" aria-label="Search"  onChange={this.handleChange} />
					    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
					  </form>
					</nav>
				</div>
			</div>
		)
	}
}

export default SearchBar