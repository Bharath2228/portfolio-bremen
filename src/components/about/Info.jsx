import React from 'react'

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1.5 years working</span>
        </div>
        <div className="about__box">
            <i className='bx bx-book-open about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Undergraduate</span>
        </div>
        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">15 projects</span>
        </div>

    </div>
  )
}
