import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "About"
};

const About = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  console.log(theme);
  return (
    <div>About</div>
  )
}

export default About
