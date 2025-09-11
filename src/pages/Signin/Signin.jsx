import StellarHubWhite from '../../assets/StellarHubWhite.png';

function MyConnexion(){
    return (
        <main>
        <section>
            <img src={StellarHubWhite} alt="Logo du site" width="150" height="150" />
        </section>
        <section>
            <form>
                <div>
                    <p>Sign in</p>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder='Email' required />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" placeholder='Password' required />
                </div>
            </form>
        </section>
        </main>
    )
}

// essai de récupération

export default MyConnexion