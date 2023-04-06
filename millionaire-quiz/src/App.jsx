import { StyledEngineProvider } from "@mui/material";
import QuestionProvider from "./providers/QuestionProvider";
import DialogProvider from "./providers/DialogProvider";
import { Game } from "./pages/Game";

function App() {
  return (
      <StyledEngineProvider injectFirst>
        <QuestionProvider>
          <DialogProvider>
            <Game />
          </DialogProvider>
        </QuestionProvider>
      </StyledEngineProvider>
  );
}

export default App;
