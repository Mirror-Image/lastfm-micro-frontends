import { Provider } from "react-redux";

import { TopArtists } from "@/pages/TopArtists/TopArtists.tsx";
import { store } from "@/store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <TopArtists />
    </Provider>
  );
}

export default App;
