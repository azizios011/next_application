import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Dream Craft",
  description: "Your House, Your Style, our Passion",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default layout;
