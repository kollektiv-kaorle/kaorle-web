import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(
      "https://shop.copilot.events/kaorle/events/a2a87ce5-6c77-4bdb-901b-f7cb1fc3951a"
    );
  }, []);
  return null;
};

export default Page;
