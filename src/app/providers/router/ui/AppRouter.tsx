import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/ClassNames/classNames";
import PageLoader from 'shared/ui/PageLoader/PageLoader';

const router = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <div className={classNames("page-wrapper", {}, [])}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route path={path} key={path} element={element}></Route>
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default router;
