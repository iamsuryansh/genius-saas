import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <p className="text-6xl text-green-500">Landing</p>
      <div>
        <Link href="/sign-in">
          <Button>Sign-in</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign-up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
