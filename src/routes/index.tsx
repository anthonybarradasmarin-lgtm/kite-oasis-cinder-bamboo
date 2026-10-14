import { createFileRoute } from "@tanstack/react-router";
import { TriviaApp } from "@/components/trivia-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TriviaApp />;
}
