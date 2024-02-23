import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, title, content }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const handleClickOpen = () => {
        return (
            window.open(content)
        )
    }


    const classes = useStyles();

    return (
        <Fade bottom>

            <div onClick={handleClickOpen} key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary }}>{course}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
                </div>
            </div>

        </Fade>
    )
}

export default EducationCard
