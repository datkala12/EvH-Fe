import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import shopping from "../assets/shopping-cart.png"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

require('@solana/wallet-adapter-react-ui/styles.css');

const Layout = () => {

  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = clusterApiUrl(network);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
  ];

  return (
    <>
      <nav>
        <a href="#" className="logo text-orange-500">
          <Link to="/"> AccHub</Link>
        </a>
        {/* thanh công cụ*/}
        <div className="links">
          <a href="#">
            <Link to="/">Home</Link>
          </a>
          <a href="#">
            <Link to="/About">About us</Link>
          </a>
          <a href="#">
            <Link to="/Contact">Contact</Link>
          </a>
          <a href="#">
            <Link to="/Post">Sell</Link>
          </a>
        </div>

        <div className="flex cart">
          <div className="pr-10">
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton />
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
          </div>
          <button className="btn btn-outline"><img src={shopping} /></button>

        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
