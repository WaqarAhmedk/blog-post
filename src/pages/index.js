import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./homepage";
import AppBar from "@/components/appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AppBar />
      <HomePage />
    </>
  );
}
