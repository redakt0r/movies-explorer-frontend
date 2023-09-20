import React from "react";

const CurrentUserContext = React.createContext({
  currentUser: { name: "Витаааля", email: "не загружено..." },
  setCurrentUser: () => {},
});

export default CurrentUserContext;
