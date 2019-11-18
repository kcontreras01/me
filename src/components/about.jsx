import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm currently a Web Developer at S’well with a background in technology that sparked my journey from my role as an Apple Genius to a Developer at General Assembly’s Web Development Immersive Bootcamp.</p> 
                    <p>I specialize in Full Stack Development technologies and regularly volunteer at Nano Hackers Academy, offering advanced learning opportunities for tech-enthusiastic kids, and Brooklyn Animal Action, caring for rescue animals. 
                    I thrive in a team-based environment and believe that our greatest resource is our peers. In my free time you can find me singing Barbershop music with my Quartet, Repeat Offenders, watching Youtube videos, and taking long walks, constantly on the lookout for cats.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">What I do?</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Frontend Development</h3>
                    <p>Experience building UX/UI friendly websites using React, Vue, HTML/CSS, and JavaScript</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Backend Development</h3>
                    <p>Experience building databases and OOP logic using PHP, Laravel, and NodeJS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Mentorship</h3>
                    <p>Participant in mentorship of kids ages 7-17 learning about programming at NanoHackers Academy and TechScholars</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
