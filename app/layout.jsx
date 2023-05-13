import "@styles/globals.css";

// import Nav from "@components/Nav";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Gify",
  description: "Discover Gify",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <main className='padding_box'>
         
          {children}
        </main>
     
    </body>
  </html>
);

export default RootLayout;