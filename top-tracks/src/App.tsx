import { Provider } from "react-redux";

import { TopTracks } from "@/pages/TopTracks/TopTracks.tsx";
import { store } from "@/store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <TopTracks />
    </Provider>
  );
}

export default App;
