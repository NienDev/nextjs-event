import MainHeader from "./main-header";

const { Fragment } = require("react");

function Layout({ children }) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
