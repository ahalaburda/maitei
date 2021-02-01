import React, { Component } from 'react'
import axios from 'axios'

/**
 * Local component get all the record from the local database and list the response from the API.
 */

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: []
    }
  }

  /**
   * GET: get the record from the local API and update the state with the response
   */
  getNews() {
     axios.get('http://localhost:3000/api/v1/posts.json')
        .then(response => {
          const reversed = response.data.data.reverse();
          this.setState({articles: reversed});
        })
        .catch(error => console.log(error))
  }

  componentDidMount(){
   this.getNews();
  }

  render() {
    return (
      <div>
		<div class="col-lg-8 px-md-5 py-5">
	    	<div class="row pt-md-4">
	    		<h1 class="mb-3">{props.title}</h1>
	    		<p>{props.date}</p>
	            <p>
	              <img src={props.image_url} alt="Watch news" class="img-fluid" />
	            </p>
	            <p>{props.description}</p>
	            <div class="tag-widget post-tag-container mb-5 mt-5">
	              <div class="tagcloud">
	                <a href="#" class="tag-cloud-link">Local</a>
	                <a href="#" class="tag-cloud-link">Watches</a>
	              </div>
	            </div>
	            <div class="about-author d-flex p-4 bg-light">
	              <div class="bio mr-5">
	                <img src="images/person_1.jpg" alt="Image placeholder" class="img-fluid mb-4" />
	              </div>
	              <div class="desc">
	                <h3>{props.author}</h3>
	              </div>
	            </div>

			</div>
		</div>
      </div>
    )
  }
}

export default Post;
