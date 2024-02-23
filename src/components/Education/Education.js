import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
            <h1 style={{color:theme.primary}}>Education</h1>
                <div className="education-description">
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            title={edu.course}
                            content={edu.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
