import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pooja-prayer")({
  component: PoojaPrayerLayout,
});

function PoojaPrayerLayout() {
  return <Outlet />;
}