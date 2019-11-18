import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" />
              <h1 id="colorlib-logo"><a href="index.html">Kiara Contreras</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                  <li><a href="#blog" data-nav-section="blog">Posts</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="mailto:kiara.p.contreras@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail" style={{fontSize: '35px'}}/></a></li>
                <li><a href="https://twitter.com/kiarathedev" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/kiarathedev/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/kiaracontreras" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/kcontreras01" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://dev.to/kiarathedev" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-wine" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p>
                <small>Photo by
                  <a href="https://unsplash.com/@scottwebb?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Scott Webb"> Scott Webb</a>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
