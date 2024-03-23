import { SignIn } from "@clerk/clerk-react";
 
export default function Page() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <SignIn />
    </div>
  )
}