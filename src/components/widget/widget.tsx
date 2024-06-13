import React from "react";
import { WidgetLoading } from "./WidgetLoading";
import useSWR from "swr";
import { WidgetTabs } from "./WidgetTabs";

export const Widget = () => {
  const { data, isLoading, error } = useSWR<{
    tokens: CompleteToken[];
    widget: CompleteWidget;
  }>("/api/widget?widgetId=wget_c9rmdhwa7n64dfe752yxs");

  if (isLoading && !data) {
    return <WidgetLoading />;
  }
  if (error) {
    return <div>error</div>;
  }

  return <WidgetTabs tokens={data.tokens} widget={data.widget} />;
};
