import StellarHubWhite from '../../assets/StellarHubWhite.png';
import "./Signin.css"

function MyConnexion(){
    return (
        <main className='myLogin'>
        <section>
            <img src={StellarHubWhite} alt="Logo du site" width="700" height="500" />
        </section>
        <section>
            <form>
                <div className='cardsLogin'>
                    <p>Sign in</p>
                    <label htmlFor="email"></label>
                    <input className="signin-input" type="email" id="email" name="email" placeholder='Email, phone or username' required />
                    <label htmlFor="password"></label>
                    <input className="signin-input" type="password" id="password" name="password" placeholder='Password' required />
                </div>
            </form>
        </section>
        </main>
    )
}

// essai de récupération

export default MyConnexion