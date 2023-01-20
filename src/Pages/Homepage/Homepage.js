import Preview from "./../../Asserts/preview.png";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="home-section">
            <div className="home-container">
                <div className="home-flex-one">
                    <div className="img-wrapper">
                        <img src={Preview} alt="Preview"></img>
                    </div>
                    <div className="dividend-section">
                        <p className="bold"><b>The 50% airdrop will be divided as follows: </b></p>
                        <ul>
                            <li>10% To Solana Artists & Collectors</li>
                            <li>10% To Solana Developers</li>
                            <li>10% to early open book traders</li>
                            <li>10% To Bonk Shark NFT holders on the distribution date </li>
                            <li>10% Extra reward available to Rare Invisible Bonk Shark NFT holders </li>

                        </ul>
                    </div>
                    <button className="button">
                        <a href="https://twitter.com/bonkshark_?t=fdhprlzmCy-KaDSlc3gd1w&s=09" target="_blank" rel="noreferrer"><span><i class="fa-brands fa-twitter"></i> Follow</span></a>
                    </button>
                </div>
                <div className="home-flex-two">
                    <div className="details-container">
                        <h1 className="title">Why Bonk Shark ?</h1>
                        <p style={{ paddingBottom: "10px" }}>Recently, the Solana community lost trading value, SOL holders decreased, and SOL NFT platforms also lost value due to many rumors.</p>
                        <p>But now all the problems have been solved and SOLANA is back to normal. All this happened in a short period of time, and the biggest reason for this is a meme coin named "BONK". That's why we're inspired by Bonk, and we're also passionate about helping the Solana community, so we created a brand-new project called Bonk Shark.</p>
                    </div>
                    <div className="details-container two">
                        <h1>Bonk Shark NFTs</h1>
                        <p>There are 10k randomly generated NFTs in Bonk Shark. Additionally, we have created our own token. The Bonk Shark NFT holders will receive 20% of the total token supply as a special airdrop. We will announce the airdrop distribution dates as soon as possible.</p>
                    </div>
                    <div className="details-container two">
                        <h1><b>Bonk Shark (BKSK) Token</b></h1>
                        <p>The Bonk Shark token is the first shark token created for the public, with 30% of the total supply allocated to the Solana community. In addition,  Bonk Shark NFT holders will receive 20% of the total distribution of  Bonk Shark tokens</p>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Homepage;