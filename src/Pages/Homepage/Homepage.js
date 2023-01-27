import Preview from "./../../Asserts/preview.png";
import Logo from "./../../Asserts/logo.png";
import Logo2 from "./../../Asserts/LOGO2.jpg";
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
                        <p className="discord-wrapper"><a className="discord" rel="noreferrer" target="_blank" href="https://discord.com/invite/Gsx8BhTWxr">JOIN US</a></p>
                        <p className="twitter-wrapper"><a className="twitter" href="https://twitter.com/bonkshark_?t=fdhprlzmCy-KaDSlc3gd1w&s=09" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i> Follow @bonkshark_</a></p>
                    </div>

                </div>
                <div className="nft-section">

                    <div className="intro-content nft">
                        <h1>Bonk Shark NFTs</h1>
                        <p>There are 10k randomly generated NFTs in Bonk Shark. Additionally, we have created our own token. The Bonk Shark NFT holders will receive 20% of the total token supply as a special airdrop. We will announce the airdrop distribution dates as soon as possible.</p>
                        <a href="/"><span>Buy NFT</span></a>
                    </div>
                    <div className="nft-wrapper">
                        <img src={Logo2} alt="logo" />
                    </div>
                </div>
                <div className="token-container">
                    <div className="token-section">
                        <h1>Bonk Shark (BKSK) Token</h1>
                        <p>The Bonk Shark token is the first shark token created for the public, with 30% of the total supply allocated to the Solana community. In addition, Bonk Shark NFT holders will receive 20% of the total distribution of Bonk Shark tokens</p>
                        <a href="/"><span>Buy BKSK</span></a>
                        <p className="token-id active"><span>TOKEN ID:</span> BKa2PW1u6qEgGn1Yden73s1syjGVmbfG49wi6CFLCkYd</p>
                    </div>
                    <div className="supply-card">
                        <h2>Total Circulation</h2>
                        <p>Total Supply: 1,000,000,000.00</p>
                        <p>Circulating Supply: 500,000,000.00</p>
                        <a rel="noreferrer" target="_blank" href="https://solscan.io/token/BKa2PW1u6qEgGn1Yden73s1syjGVmbfG49wi6CFLCkYd">CHECK SOL SCAN</a>
                    </div>
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

                <div class="timeline">
                    <h1>Roadmap</h1>
                    <div class="container left">
                        <div class="date">Q1</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>The goal is to generate 10k Bonk Shark NFTs based on the Solana blockchain</p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">Q2</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Design of the Bonk Shark website</p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">Q3</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Based on the Solana blockchain, the Bonk Shark Token was created</p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">Q4</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Bonk Shark NFT's are listed on some of the top market places</p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">Q5</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Participation and distribution of 5% Airdrop of the total supply of BKSK Tokens to Bonk Token holders</p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">Q6</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Bonk Shark community development, social media marketing, and competitions</p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">Q7</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Liquidity for Bonk Shark Token is locked on Raydium and Jupiter</p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">Q8</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Listing of Bonk Shark Token on CoinmarketCap and CoinGecko</p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">Q9</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>The holders of Bonk Shark NFT will receive a 20% airdrop distribution of Bonk Shark tokens</p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">Q 10</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>One by one, Bonk Shark Token will be listed on many top exchanges</p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">Q11</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Distribution of 30% of the total supply of BKSK Tokens to the Solana community as an airdrop</p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">Q12</div>
                        <i class="icon fa fa-certificate"></i>
                        <div class="content">
                            <p>Enhance the use cases for the Bonk Shark Token (e.g. Bonk Shark Swap, NFT Staking, Token Staking, Bonk Shark Token Holders will receive our next NFT and token project airdrops, etc.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;