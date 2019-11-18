import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer at S'well <span>Jan 2019 - Present</span></h2>
                        <ul>
                          <li>Deployed B2B Portal using Laravel Forge paired with AWS</li>
                          <li>Maintained, updated, and launched new B2B Customer Portal</li>
                          <li>Created PHP software using Avalara API to be used for multiple company sites in order to calculate taxes and capture forms</li>
                          <li>Worked along Sales team in order to ensure a positive experience prior to new B2B Customer Portal launch</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer at Hashtag Labs <span>Feb 2018 - Jan 2019</span></h2>
                        <ul>
                          <li>Shipped production code to HTLExec and deployed using AWS</li>
                          <li>Developed client facing software using PHP/Laravel that collected and analyzed data from online publishing businesses</li>
                          <li>Converted existing client-facing software's React Front End to Vuejs</li>
                          <li>Wrote tests for Back End prior to launch, ensuring solid UX experience for customers</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Consultant at Fireman Hospitality Group <span>Nov 2017 - Jan 2018</span></h2>
                        <ul>
                          <li>Developed data access tools in ReactJS, NodeJS, and Sequelize</li>
                          <li>Built SQL database and integrating third-party APIs to automate marketing</li>
                          <li>Implemented and trained staff on using new data dashboards for marketing</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
