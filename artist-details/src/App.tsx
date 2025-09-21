import { Provider } from "react-redux";

import { ArtistDetails } from "@/pages/ArtistDetails/ArtistDetails.tsx";
import { store } from "@/store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <ArtistDetails />
    </Provider>
  );
}

export default App;
