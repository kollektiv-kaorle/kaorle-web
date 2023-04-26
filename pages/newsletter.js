import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Newsletter() {
  const router = useRouter();
  useEffect(() => {
    router.replace("https://eepurl.com/hJRrTb");
  }, []);
  return null;
}
