import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyled from "./constans/Global.styled";
import { ThemeProvider } from 'styled-components'
import { Suspense } from "react";
import { MyWeb } from "./App.styled";
import ManagePage from "./ManagePage";
import SalesPage from "./SalesPage";
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
}
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyled />
            <MyWeb>
              <Routes>
                <Route path="/manage/*" element={<ManagePage />} />

                <Route path="/*" element={<SalesPage />} />

              </Routes>

            </MyWeb>
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>

    </>


  );
}


export default App;
