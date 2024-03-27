import {MetaFunction} from "@remix-run/node";
import About from "~/routes/about";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function() {
  return About();
}