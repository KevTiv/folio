import Image from 'next/image'

const WineGrader = ()=>{
    return(
        <>
            <div>
                <div>
                    <h2>Wine Grader</h2>
                    {/* Arrow */}

                    <Image className={"projectImg"} src={'/img/wineGrader/wineGrader_1.webp'} alt='portfolio img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div>
                        <p>
                            <a href="https://winequality-predictor.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            
                        </p>
                        <p>
                            <a href="https://github.com/KevTiv/Machine-Learning-Wine-Quality" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Web app project built to offer the possibility to grade wine quality according to the chemical 
                        composition of a wine sample. A user can adjust those chemical factors from a slider panel in the web application. 
                        The app grader model is built using machine learning techniques on a dataset that is consist of 1600 different wines.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        Build a web application That offers the end-user the possibility to grade the wine quality 
                        depending on the chemical content of the user’s wine.
                    </p>
                </div>
            </div>
        </>
    )
}

export default WineGrader;