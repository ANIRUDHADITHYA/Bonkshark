import Preview from "./../../Asserts/preview.png";
import Logo from "./../../Asserts/logo.png";
import "./Homepage.css";


const Homepage = () => {

    
    return (
        <div className="home-section">
            <div className="home-container">
                <div className="intro-section">
                    <div className="logo-wrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="intro-content intro">
                        <h1>Why Bonk Shark ?</h1>
                        <p>Recently, the Solana community lost trading value, SOL holders decreased, and SOL NFT platforms also lost value due to many rumors.</p>
                        <p>But now all the problems have been solved and SOLANA is back to normal. All this happened in a short period of time, and the biggest reason for this is a meme coin named "BONK". That's why we're inspired by Bonk, and we're also passionate about helping the Solana community, so we created a brand-new project called Bonk Shark.</p>
                        <p className="discord-wrapper"><a className="discord">JOIN US</a></p>
                        <p className="twitter-wrapper"><a className="twitter" href="https://twitter.com/bonkshark_?t=fdhprlzmCy-KaDSlc3gd1w&s=09" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i> Follow @bonkshark_</a></p>
                    </div>

                </div>
                <div className="nft-section">

                    <div className="intro-content nft">
                        <h1>Bonk Shark NFTs</h1>
                        <p>There are 10k randomly generated NFTs in Bonk Shark. Additionally, we have created our own token. The Bonk Shark NFT holders will receive 20% of the total token supply as a special airdrop. We will announce the airdrop distribution dates as soon as possible.</p>
                        <a><span>Buy NFT</span></a>
                    </div>
                    <div className="nft-wrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div className="token-section">
                    <h1>Bonk Shark (BKSK) Token</h1>
                    <p>The Bonk Shark token is the first shark token created for the public, with 30% of the total supply allocated to the Solana community. In addition, Bonk Shark NFT holders will receive 20% of the total distribution of Bonk Shark tokens</p>
                    <a><span>Buy BKSK</span></a>
                    <p className="token-id"><span>TOKEN ID:</span> o1Mw5Y3n68o8TakZFuGKLZMGjm72qv4JeoZvGiCLEvK</p>
                </div>

                <div className="tokenomics-section">

                    <div className="tokenomics-wrapper">
                        <img src={Preview} alt="preview" />
                    </div>
                    <div className="intro-content tokenomics">
                        <h1>Tokenomics</h1>
                        <p>The 50% airdrop will be divided as follows:</p>
                        <ul>
                            <li>10% To Solana Artists & Collectors</li>
                            <li>10% To Solana Developers</li>
                            <li>10% to early open book traders</li>
                            <li>10% To Bonk Shark NFT holders on the distribution date</li>
                            <li>10% Extra reward available to Rare Invisible Bonk Shark NFT holders</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homepage;