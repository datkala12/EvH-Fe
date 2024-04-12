# EvH-Fe
* Front-end for AccHub project, this project need TestAPI project at [here](https://github.com/datkala12/AccHub) to run at the same time

# How to run
* After clone this repo, you need to open your terminal and type `cd fe-ui`
* Type `npm start` to start the project
* UserPage `http://localhost:3000/`
* AdminPage `http://localhost:3000/admin`

# Problem while running

## Solana/web3 are missing
* Open your terminal and install code below
* `npm install @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-base @solana/wallet-adapter-wallets`
## Error in node_modules
* You have two options to solution:
  - Install all the missing but this will make your file become more heavier
  - Ignore all the missing if you don't have intend to use any of it. you can use fallback
    - First go to the node_modules to find `react-scripts` and then open file in config -> webpack.config.js 
      > resolve: {
      > fallback: {
      >  crypto: false,
      >  stream: false,
      >  http: false,
      >  https: false,
      >   zlib: false,
      >   url: false
      > },
## Error in map
* Reason: can not get api -> Resolution: Run BE and this will be resolve
