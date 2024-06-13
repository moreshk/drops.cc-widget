import React, { Suspense, lazy } from "react";
import { WidgetLoading } from "./components/widget/WidgetLoading";

const AppLazyLoad = lazy(() => import("./AppLazyLoad"));

export default function App() {
  return (
    <Suspense fallback={<WidgetLoading />}>
      <AppLazyLoad />
    </Suspense>
  );
}
