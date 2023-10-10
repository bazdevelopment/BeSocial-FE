import HomeComponent from "@/components/Home";
import AuthenticationPage from "@/pages/authentication/authentication-page";
import Image from "next/image";

export default function Home() {
  console.log("from server home");
  return <AuthenticationPage />;
}
