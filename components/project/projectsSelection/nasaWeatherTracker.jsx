import Image from 'next/image'

const WeatherTracker = ()=>{
    return(
        <>
            <div>
                <div>
                    <h2>Nasa Weather Tracker</h2>
                    {/* Arrow */}
                    <Image className={"projectImg"} src={'/img/nasaWeatherTracker/nasaWeatherTracker_1.webp'} alt='Weather tracker img' width='256' height='256' layout='responsive'/> 
                </div>
                <div>
                     <div>
                        <p>
                            <a href=" https://kevtiv.github.io/weather_events_tracker/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            
                        </p>
                        <p>
                          <a href="https://github.com/KevTiv/weather_events_tracker" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Web app built to take advantage of the public Nasa API that tracks weather 
                        events such as wildfire, marine storms, and active volcanoes across the globe.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        Create an application that could update an end-user with locations of severe 
                        weather events such as wildfire, maritime storms, and active volcanoes.
                    </p>
                </div>
            </div>
        </>
    )

}

export default WeatherTracker;