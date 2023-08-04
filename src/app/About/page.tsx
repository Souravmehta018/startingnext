import Link from "next/link";

export default function About() {
 // throw new Error("Test")
  return (
    <div className="flex flex-col items-center justify-between p-24">
        About Page
        <Link href='/'> Home page </Link>
    </div>
        
  )
}
