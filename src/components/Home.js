import "../styles/home.css";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/fontawesome-free-solid';


const Home = () => {

    const downloadResume = () => {
        window.open("/resume/resume.pdf", "_blank")
        saveAs(
          "/resume/resume.pdf",
          "Nidhi_Tholar_Kuchur.pdf"
        );
      };

    return (
        <div className="homeContainer">

            <div className="intro-container">
                <div className="photo-container">
                    <div className="photo">     
                    </div>
                </div>
                <div className="bio-container">
                    <h4>Nidhi Tholar Kuchur</h4>
                    <h6>Seeking Co-Op opportunities for Fall 2022</h6> <br />
                    <h6>💻  &nbsp; Software Developer</h6>
                    <h6>🎓  &nbsp; San Jose State University</h6>
                    <h6>📍 &nbsp; San Jose, CA</h6>
                </div>
            </div>

            <div className="highlights-container">
                <div className="social-container">
                    <div className="socials" onClick={()=> window.open("https://github.com/nidhi-tholar", "_blank")}>
                        <svg className="svg1" viewBox="-100 10 700 500">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet" width="100%" height="100%"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </svg>
                    </div>
                    <div className="highlight-name">GitHub</div>
                </div>
                    
                <div className="social-container">
                    <div className="socials" onClick={()=> window.open("http://www.linkedin.com/in/nidhi-tholar", "_blank")}>
                        <svg className="svg1" viewBox="-50 70 700 500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 750 500"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                        </svg>
                    </div>
                    <div className="highlight-name">LinkedIn</div>
                </div>

                <div className="social-container">
                    <div className="socials" onClick={downloadResume}>
                        <svg className="svg1" viewBox="-50 70 700 500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-200 -50 900 500"><path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z"/></svg>
                        </svg>
                    </div>
                    <div className="highlight-name">Resume</div>
                </div>

                <div className="social-container">
                    <div className="socials" onClick={()=> window.location = 'mailto:nidhi.tholar20@gmail.com'}>
                        <svg className="svg1" viewBox="-50 70 700 500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -80 800 500"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                        </svg>
                    </div>
                    <div className="highlight-name">Gmail</div>
                </div>

                {/* <div className="social-container">
                    <div className="socials" onClick={()=> window.open("https://www.instagram.com/storiesbynidhi/", "_blank")}>
                        <svg className="svg1" viewBox="-25 0 700 500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </svg>
                    </div>
                    <div>Instagram</div>
                </div> */}

            </div>

            <div className="tab-container">
                <hr></hr>
                <div className="tabs">
                    <div className="tab"><FontAwesomeIcon icon="fa-solid fa-graduation-cap"/>&nbsp;Education</div>
                    <div  className="tab"><FontAwesomeIcon icon="fa-solid fa-briefcase"/>&nbsp;Experience</div>
                    <div  className="tab"><FontAwesomeIcon icon="fa-solid fa-star" />&nbsp;Technical Skills</div>
                    <div  className="tab"><FontAwesomeIcon icon="fa-solid fa-laptop"/>&nbsp;Projects</div>
                </div>
            </div>
        </div>
    );
}

export default Home;