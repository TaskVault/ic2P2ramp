<p align="center">
<img src="assets/p2ploan.png" width="250">
</p>

<div align="center">
<span style="font-size:40px; font-weight:bold">ic2p2ramp</span>
</div>

#

IC2P2Ramp is a decentralized protocol combining the Internet Computer (ICP) with Ethereum and other EVM blockchains to facilitate onramping and offramping of digital assets. The protocol utilizes multiple canisters for various functionalities, including HTTPS outcalls, EVM RPC communication, and exchange rate retrieval. It features a backend and a frontend for interacting with the protocol.

This project was created for [ETH Prague 2024](https://devfolio.co/projects/icpramp-ca30). The repository [iC2P2Ramp-circuits](https://github.com/reymom/ic2P2ramp-circuits) is part of the same project, where the evm smart contracts used in the frontend and backend canisters are defined.

## Deployments

### Canisters on ICP

- **HTTPS Outcalls Canister**: Facilitates secure HTTP(S) requests from ICP canisters.
- **EVM RPC Canister**: An ICP canister smart contract for communicating with Ethereum and other EVM blockchains using an on-chain API.
- **Exchange Rate Canister**: Retrieves and provides exchange rates for different cryptos to USD.
- **Backend Canister**: Handles business logic, including order management and communication with other canisters.
- **Frontend Canister**: Provides the user interface for interacting with the IC2P2Ramp protocol.

<p align="center" style="margin-top:25px">
<img src="assets/canister_flow_diagram.png" style="border-radius:10px">
</p>

## 🚀 Canisters

### HTTPS Outcalls Canister

The HTTPS Outcalls Canister enables secure HTTPS requests from ICP canisters, allowing for external data fetching and API interactions. It is used particularly to fetch order details from the Paypal API in order to verify the transactions.

### EVM RPC Canister

The EVM RPC Canister is a smart contract on the ICP that communicates with Ethereum and other EVM blockchains. It provides an on-chain API for interacting with smart contracts and retrieving blockchain data. It is used to release the funds once the paypal payment is verified.

### Exchange Rate Canister

The Exchange Rate Canister retrieves and provides exchange rates for various assets. It uses an external API to fetch real-time exchange rates and serves this data to other canisters within the protocol. It is used to automatically fetch the best market price for the offramper order.

### Backend Canister

The Backend Canister handles the core business logic of the IC2P2Ramp protocol. It manages orders, communicates with the EVM RPC canister for blockchain interactions with the escrow in different EVM blockchains, such as Mantle and Polygon, and verifies paypal payments using the HTTPS Outcalls canister.

### Frontend Canister

The Frontend Canister provides a user-friendly interface for interacting with the IC2P2Ramp protocol. Users can create and manage orders, view exchange rates, make payments and perform other related onramping and offramping operations.

<p align="center" style="margin-top:25px">
<img src="assets/blockchain_interaction_diagram.png" style="border-radius:10px">
</p>

<p align="center" style="margin-top:25px">
<img src="assets/payment_verification_diagram.png" style="border-radius:10px">
</p>

## 🛠️ Usage

### Build

To build the canisters, use the following command:

```shell
dfx build
```

## Interact

- Call the `get_usd_exchange_rate` method to retrieve the exchange rate for a given asset:

```shell
dfx canister call backend get_usd_exchange_rate '( "ETH" )'
```

- Retrieve and verify a paypal order using the backend canister:

```sh
dfx canister call backend verify_transaction '( "0", transaction_id = "4UC03319AV493141A" )'
```

### Locally:

Run the following commands in a new, empty project directory:

```sh
git clone https://github.com/fxgst/evm-rpc-rust.git # Download this starter project
cd evm-rpc-rust # Navigate to the project directory
dfx start --clean --background # Run dfx in the background
npm install # Install project dependencies
npm run setup # Install packages, deploy canisters, and generate type bindings

npm start # Start the development server
```

Also, a better deployment flow is provided in the script:

```sh
./deploy.sh
```

## 📚 Documentation

- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [Internet Computer wiki](https://wiki.internetcomputer.org/)
- [Internet Computer forum](https://forum.dfinity.org/)
- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Rust developer docs](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
- [EVM RPC developer docs](https://internetcomputer.org/docs/current/developer-docs/integrations/ethereum/evm-rpc/)
- [Developer Experience Feedback Board](https://dx.internetcomputer.org/)
