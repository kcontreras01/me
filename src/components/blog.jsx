import React, { Component } from 'react'

export default class Blog extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

	componentDidMount() {
		fetch("https://dev.to/api/articles?username=kiarathedev")
			.then(res => res.json())
			.then(data => this.setState({
				articles: data
			}))
	}

  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Posts</h2>
					</div>
				</div>
				<div className="row">

					{this.state.articles.map(article => (
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft" key={"article-" + article.id}>
						
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src={article.cover_image} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>{article.readable_publish_date} </small> | <small> <i className="icon-bubble3" /> {article.positive_reactions_count}</small></span>
							<h3><a href="blog.html">{article.title}</a></h3>
						</div>
					</div>
					</div>

						)) }
					
					{/*<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Renovating National Gallery</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Make website from scratch</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>*/}

				</div>
			</div>
			</section>
      </div>
    )
  }
}
