<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/brijeshagal/bitcoin-encode/">
  
  </a>

<h3 align="center">BitStake</h3>

  <p align="center">
    "BitStake: Unleashing Digital Prosperity"
    <br />
  </p>
</div>

## Features

<ol>
  <!-- <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li> -->
  <li><a href="## BitStake Vaults: Harnessing AI for Optimized Crypto Investments">MultiStrategy ML-based Vaults</a></li>
  <li><a href="# Full fledged Account Abstraction">Full-fledged Account Abstraction with Gasless Transactions and Smart Accounts</a></li>
  <li><a href="#ML Models">In-house, highy accurate ML Models</a></li>
  <li><a href="# Credit Delegation">Credit Delegation Extravaganza</a></li>
  <li><a href="## Interactive UI">Interactive User Interface</a></li>
  <li><a href="#contributing">Contributing</a></li>
</ol>

<br>
<br>
<br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## BitStake Vaults: Harnessing AI for Optimized Crypto Investments

1. Long-Term Investment Vault
Maximize Your Future with AI-Driven Strategies

Our Long-Term Investment Vault is designed for the visionary investor. By leveraging advanced machine learning models, this vault optimizes your returns over an extended period. Here's how it works:

Flexible Deposit Window: Deposit your funds at your convenience.
Tailored Investment Duration: Specify your investment timeline for each deposit. Longer commitments are encouraged for optimal growth.
Early Withdrawal Fee: A nominal fee is applied for withdrawals before the specified deadline, ensuring commitment to your investment journey.
Personalized Portfolio Creation: Utilize our innovative NLP-based form, which gathers insights about your investment preferences and goals. This allows us to craft a unique investment portfolio that's exclusively tailored to your financial aspirations.

<br>

# Full fledged Account Abstraction

```
Sign in with your Email or social credentials, or your metamask wallet if you're old fashioned like us. 
Either way, we've got it handled ;)
```

Our project harnesses the innovative capabilities of **ERC4337** standard for **account abstraction**, providing a seamless integration of **smart accounts** with our custom **Bundler and Paymaster Infrastructure**. This setup enables advanced features like **ERC712** and **ERC2612 permits**, allowing for more secure and efficient message and transaction signing processes. By incorporating **OpenZeppelin's relayer** services, we ensure that transactions are relayed efficiently, enhancing the scalability and reliability of our system. 
Furthermore, our platform integrates a unique **social login feature** (Login with email, gmail, twitter, etc.), along with multi-wallet support like **Metamask**, **WalletConnect*, and **Coinbase** empowering users to access their smart accounts using their social credentials. 
This not only simplifies the login process but also provides an option to **effortlessly switch between their social-linked smart accounts and personal EOA accounts**. 
This integration of social logins with smart accounts helps make On-chain ERC20 transactions more accessible and user-friendly, particularly for those new to the Ethereum ecosystem.

See the [open issues](https://github.com/brijeshagal/bitcoin-encode/issues) for a full list of proposed features (and known issues).

The diagram above showcases the **predictive performance** of our **ML model** over a **six-month period**, ranging from **July 2023 to January 2024**, for price of ETH on the mainnet. 
The blue line represents the actual price of ETH as recorded over the timeframe, serving as the ground truth against which we evaluate our model's accuracy. 
In contrast, the orange line illustrates the predicted prices as generated by our ML model through a simulation. 

The model has been trained on historical data, incorporating various features such as market trends, trading volumes, and global economic indicators, to forecast future price movements of ETH. Our model utilizes advanced algorithms capable of capturing complex patterns in the data, which is evidenced by the close tracking between the predicted (orange) and actual (blue) values. This not only demonstrates the model's robustness but also its potential utility for investors and traders seeking to navigate the volatile cryptocurrency market with greater foresight.

<br>
<br>

## Interactive UI

Frontend Deployment:
Our frontend, built with the dynamic React framework, offers a responsive and interactive user interface. This is further enhanced by Vite's efficient bundling and rapid hot module replacement, ensuring a smooth and fast development experience. Our deployment strategy ensures that the UI is lightweight, fast, and accessible, regardless of the device or platform.


Account Abstraction and Multi-Chain Connectivity:
Central to our app's functionality is the account abstraction smart account wallet. This innovative feature simplifies the user experience by abstracting away the complexities of blockchain interactions. It connects seamlessly to multiple chains, allowing users to engage with different cryptocurrencies and blockchain services without the hassle of managing multiple wallets or interfaces.

Gasless Transactions:
In our pursuit to enhance user convenience, we've integrated a system for gasless transactions. This feature is a game-changer, removing the barrier of gas fees that often hampers transaction efficiency. Users can now enjoy a frictionless experience, engaging in transactions without worrying about the additional cost of gas fees.

At BitStake, we are committed to providing a technologically advanced, user-friendly platform. Our deployment strategy reflects our dedication to innovation, security, and seamless user experience, making digital investment accessible and enjoyable for everyone.

<br>
<br>

# Getting Started

## Using the SDK

For in detail documentation of the SDK, please refer to the [Documentation](./AaveV3SDK/README.md)

To use this SDK, ensure Node.js is installed on your system. Follow these steps to get started:

```bash
$ git  clone https://github.com/brijeshagal/bitcoin-encode/.git

```

Reach to the frontend folder

```bash
$ npm  install
```

For dependency installation, follow these steps:

```bash
$ npm init --yes
$ npm install dotenv viem
$ npm install --save-dev typescript ts-node
$ npx tsc --init
```

## Running the Web App Locally

1. Clone the repo
  ```sh
  git clone https://github.com/brijeshagal/bitcoin-encode.git
  ```

2. Go to repo
  ```sh
  cd bitcoin-encode/frontend_main
  ```

3. Configure the environment
  Use the `.env.example` files are reference to add your API keys and config parameters to be able to run the web app locally.

3. Split the Terminal into 2 parts (Cmd + \)
  ```sh
  # 1st Terminal
    $ cd frontend_main
    $ npm install
    $ npm run dev
  
  # 2nd Terminal
    $ cd backend_main
    $ npm install
    $ npm run dev
  ```
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* **Solidity**
* **Viem.js**
* **Typescript**
* **Vite Tailwind**
* **React.js**
* **Node.js**
* **Ethers.js**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
