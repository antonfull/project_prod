import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/ClassNames/classNames";

const router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
