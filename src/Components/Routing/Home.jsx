// import Team from "../../MicrosoftTeams-image.png";
import HomeTotals from '../HomeTotals';
import videp from "../../videp.mp4";


function Home() {
    return (
        <div style={{ margin: "15px", fontFamily: "monospace" }} >
            <article style={{ textAlign: "center", marginTop: "50px" }}>
                <br />
                <div style={{backgroundColor: "purple", borderRadius: "15px", color:"white"}}>
                    <h1 >Welcome To The Colleague Management Tool!</h1>
                    <br />
                    <HomeTotals />
                    <br />
                </div>
                <br/>
                <h4>A note from your CEO..</h4>
                <p>"Team, each one of you brings unique strengths and expertise to our agency.
                    Your dedication and hard work are the foundation of our success.
                    Remember, every challenge we face is an opportunity to demonstrate our
                    resilience and commitment to excellence. Let’s continue to support each
                    other, stay focused on our goals, and keep pushing the boundaries of what
                    we can achieve together. We’re not just selling properties; we’re helping
                    dreams come true, one home at a time. Remember YOU are Ctrl Alt Elite!”</p>

                <br/>
                <br/>
                <div>
                <h1>Meet the Team!</h1>
                <video width="70%" height ="40%" controls>
                    <source src = {videp} type='video/mp4'  />
                    </video>
                <br />
                </div>
                <p>Left to right: Liliano Balde, Paige Godwin, Nathan Liddle, Richard Miles, Andrew King </p>

            </article>

            <br />
            <section style={{color: "white"}} >
                <div style={{ backgroundColor: "#984da2", borderRadius: "5px", padding: "5px", margin: "10px"}}>
                    <h5>Liliano Balde</h5>
                    <p>"I bring pure european excellence. If you want a property secured like CR7 secures the
                        ballon dor then you can trust me to make your dreams come true. SIUUUU"</p>
                </div>
                <div style={{ backgroundColor: "#984da2", borderRadius: "5px", padding: "5px", margin: "10px"}}>
                    <h5>Paige Godwin</h5>
                    <p>"A good estate agent puts the 'pro' in 'property' and the 'fun' in 'funding'!"</p>
                </div>
                <div style={{ backgroundColor: "#984da2", borderRadius: "5px", padding: "5px", margin: "10px"}}>
                    <h5>Nathan Liddle</h5>
                    <p>"I’m a totally rad estate agent with 10 years of experience in
                        the industry. I’m like a superhero! So, if you’re looking
                        for an agent who’s as cool as a cucumber and as smooth as butter, look no further!"</p>
                </div>
                <div style={{ backgroundColor: "#984da2", borderRadius: "5px", padding: "5px", margin: "10px"}}>
                    <h5>Richard Miles</h5>
                    <p>"Bringing a touch of flair to the world of real estate at Control Alt Elite! As an
                        estate agent, I spin property magic, turning dreams into deeds. With a knack for
                        finding the perfect match and a knackier skill in negotiation, I'm the Sherlock Holmes
                        of homes. Let's embark on this adventure together and make your property dreams a reality!"</p>
                </div>
                <div style={{ backgroundColor: "#984da2", borderRadius: "5px", padding: "5px", margin: "10px"}}>
                    <h5>Andrew King</h5>
                    <p>"The 'King' of the property world as named by some but in reality im just a truly humble man giving
                        families homes whilst raking in commission."</p>
                </div>
            </section>

        </div>
    );
}

export default Home;