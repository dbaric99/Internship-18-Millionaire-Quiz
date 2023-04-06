import { StyledEngineProvider } from "@mui/material";
import QuestionProvider from "./providers/QuestionProvider";
import DialogProvider from "./providers/DialogProvider";
import ActionProvider from "./providers/ActionProvider";
import { Game } from "./pages/Game";

function App() {
  return (
      <StyledEngineProvider injectFirst>
        <QuestionProvider>
          <DialogProvider>
            <ActionProvider>
              <Game />
            </ActionProvider>
          </DialogProvider>
        </QuestionProvider>
      </StyledEngineProvider>
  );
}

export default App;
