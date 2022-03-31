import Image from 'next/image'

const Railway = ()=>{
    return(
        <>
            <div>
                <div>
                    <h2>Railway</h2>
                    {/* Arrow */}

                    <Image className={"projectImg"} src={'/img/railway/railway_1.webp'} alt='railway img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div>
                        <p>
                            <a href="https://railway-copy.vercel.app" target="_blank" rel="noopener noreferrer">Go to site</a>
                        </p>
                        <p >
                            <a href="https://github.com/KevTiv/railway" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Copy of the railway website found on awwwards within a set timeline.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        Recreate the railway website layout and animation within a day.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Railway;