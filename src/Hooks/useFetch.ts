import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(
      () =>
        fetch(url, {
          signal: abortConst.signal,
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
            setErr(null);
          })
          .catch((err) => {
            if (err.name === "AbortError") console.log("Fetch Aborted");
            else {
              setErr("The Data cannot be Fetched 😢");
              setIsLoading(false);
            }
          }),
      1000
    );
    return () => abortConst.abort();
  }, [url]);
  return { data, isLoading, err };
};
export default useFetch;
