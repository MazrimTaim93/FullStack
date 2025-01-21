/* eslint-disable react/no-unescaped-entities */
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import img from './assets.me.jpg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
		  <h1>Jake Hurren</h1>

		  <h2>Personal Info:</h2>
		  <ul>
			  <li><strong>Major:</strong> Computer Science</li>
			  <li><strong>High School:</strong> Menwith Hill, 2011</li>
			  <li><strong>Current Year:</strong> Senior</li>
			  <li><strong>Favorite Ice Cream:</strong> Peanut Butter</li>
		  </ul>

		  <div className="box">
			  <div>
				  <h2>My favorite books</h2>
				  <ol>
					  <li><cite>A Song of Ice and Fire</cite></li>
					  <li><cite>Stormlight Archive</cite></li>
					  <li><cite>Malazan Book of the Fallen</cite></li>
					  <li><cite>The First Law Trilogy</cite></li>
					  <li><cite>The Wheel of Time</cite></li>
				  </ol>
			  </div>

			  <div>
				  <h2>My favorite movies</h2>
				  <ol>
					  <li><cite>Pirates of the Caribbean</cite></li>
					  <li><cite>Lord of the Rings</cite></li>
					  <li><cite>Momento</cite></li>
					  <li><cite>Star Wars</cite></li>
					  <li><cite>There Will be Blood</cite></li>
				  </ol>
			  </div>

			  <div>
				  <h2>My favorite games</h2>
				  <ol>
					  <li><cite>The Legend of Zelda</cite></li>
					  <li><cite>Dark Souls</cite></li>
					  <li><cite>Super Smash Bros</cite></li>
					  <li><cite>Dead by Daylight</cite></li>
					  <li><cite>The Elder Scrolls</cite></li>
				  </ol>
			  </div>

			  <div>
				  <h2>My favorite foods</h2>
				  <ol>
					  <li><cite>Steak</cite></li>
					  <li><cite>Pizza</cite></li>
					  <li><cite>Burgers</cite></li>
					  <li><cite>Fondeu</cite></li>
					  <li><cite>French Toast</cite></li>
				  </ol>
			  </div>
		  </div>

		  <h2>My Personal Interests</h2>
		  <p>
			  My favorite activity is playing Dungeons and Dragons.
			  I enjoy playing as a character, but I usually end up as the DM.
		  </p>
		  <p>
			  I also like playing music. I play drums, bass, and guitar.
			  I used to play piano but I'm not any good at that any more.
			  I've been in a few bands before, but I haven't been in one for a while.
		  </p>
		  <p>
			  I also like video games. Souls Games, Smash Bros, and Kingdom Hearts are my favorites.
			  Recently I've been really into modding Skyrim.
		  </p>
    </>
  )
}

export default App

//<img src="img" alt="Selfie" />