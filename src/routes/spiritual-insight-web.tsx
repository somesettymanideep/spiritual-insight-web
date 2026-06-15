import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/spiritual-insight-web")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
