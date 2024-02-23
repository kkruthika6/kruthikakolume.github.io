import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';
import exp from '../../assets/png/exp.jpg'
import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoCaretDownCircleOutline } from 'react-icons/io5';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
                <div className="experience-description">
                <h1 style={{color:theme.primary}}>Experience</h1>
                    <VerticalTimeline>

                        {experienceData.map(exp => (
                            <VerticalTimelineElement
                                className="timeline"
                                textClassName="timeline-box"
                                contentArrowStyle={{ borderRight: '7px solid' }}
                                dateClassName="date"
                                date={`${exp.startYear} - ${exp.endYear}`}
                                icon={<><div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                                <img src={expImgWhite} alt="" />
                            </div></>}
                            >
                                <ExperienceCard
                                    key={exp.id}
                                    id={exp.id}
                                    jobtitle={exp.jobtitle}
                                    company={exp.company}
                                    jobrole={exp.jobrole}
                                    logo={exp.logo}
                                    content={exp.content} />
                            </VerticalTimelineElement>
                        ))}


                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Experience
