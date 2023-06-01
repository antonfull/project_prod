import { classNames } from "shared/lib/ClassNames/classNames";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { Suspense, useState } from "react";

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className={classNames("page-content", {}, [])}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
