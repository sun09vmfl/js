import { useEffect, useState } from "react";
import axios from "axios";

// 사용자 정의 hook
export const useAxios = (URL) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
        setErr(null);
        setLoading(true);
      })
      .catch((err) => {
        setData([]);
        setErr("주소가 잘못되었습니다");
        setLoading(false);
      });
  }, [URL]);

  return { data, err, loading };
};
