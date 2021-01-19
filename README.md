# Automation-SWVRealEstate
Setting up testing environment for automation
Clone github repo
git clone  https://github.com/daviti/SWVRealEstate.git
Cd to SWVRealEstate on your terminal
Set up Cypress.io Installing Cypress
Make sure when you download the repo cypress and node_modules are present, If not then install them
CD to the SWVRealEstate repo
Run ‘npm init’ to install node modules
Run  ‘npm install’ to install any dependencies
Run ‘npm install cypress --save-dev’ to install cypress
Run  ‘$(npm bin)/cypress open’ to open cypress 

Check that docker hub ran 
https://hub.docker.com/repository/docker/daviti/superworld

CircleCi build https://app.circleci.com/pipelines/github/daviti

Work in progress 
Grafan and Prometheus 


Add steps to how to connect a Metamask wallet for purchasing plot of land with Etherum tokens
Setting Wallet

Download and set up metamask extensions for chrome, safari, edge or brave extension https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
When setting up the Metamask extension, make sure to save the 12 word passphrase in case you need to log in to your account.
Change  Metamask wallet (https://metamask.io) from Mainnet (real ETH) to Ropsten (test ETH) 
NOTE: Make sure you have Metamask open and connected to Superworld in order to get a token. Token will arrive in a couple of minutes.
Connect Metamask wallet to a token.
To get a free test ETH token  in Ropsten, go to: https://faucet.ropsten.be  and enter your wallet address on Ropsten
Check your wallet (you have tokens and if you purchase plots of land they should be present in here.)

