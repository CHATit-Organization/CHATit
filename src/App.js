import Layouts from "./layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { MediaProvider } from "./context/mediaContext";
import { TokenProvider } from "./context/tokenContext";

import Registration from "./pages/auth/Registration";

import { GeneralProvider } from "./context/generalContext";
import { HunterProvider } from "./context/hunterContext";
import { BetProvider } from "./context/betContext";
import { PoolProvider } from "./context/poolContext";
import { NotificationProvider } from "./utils/Toaster";
import { ToastContainer, toast, Slide } from "react-toastify";
import { ChatProvider } from "./context/chatContext";
import RenderAvatar from "./components/CreateAvatar";

function App() {
  return (
    <div className="body h-screen overflow-none pl-[50px] overflow-x-hidden   items-center justify-center flex bg-gradient-to-l from-[#7758D1] to-[#F7CBFD] overflow-y-hidden">
      <Router>
        <ToastContainer autoClose={4000} />
        <NotificationProvider>
          <PoolProvider>
            <BetProvider>
              <HunterProvider>
                <GeneralProvider>
                  <ChatProvider>
                    <TokenProvider>
                      <MediaProvider>
                        <Routes>
                          <Route path="/" element={<Index />}></Route>

                          <Route
                            path="/dashboard"
                            element={<Layouts />}
                          ></Route>
                          <Route
                            path="/auth"
                            element={
                              <div>
                                <Registration />
                              </div>
                            }
                          ></Route>
                          <Route
                            path="/create-avatar"
                            element={
                              <div>
                                <RenderAvatar />
                              </div>
                            }
                          ></Route>
                        </Routes>
                      </MediaProvider>
                    </TokenProvider>
                  </ChatProvider>
                </GeneralProvider>
              </HunterProvider>
            </BetProvider>
          </PoolProvider>
        </NotificationProvider>
      </Router>
    </div>
  );
}

export default App;
