import React from "react";

// import { Global } from '@emotion/react'
// import { globalStyles } from 'styles/global'
// render(
//   <>
//     <Global styles={globalStyles} />
//     <App />
//   </>
// )

export default Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      {children}
    </div>
  );
};
