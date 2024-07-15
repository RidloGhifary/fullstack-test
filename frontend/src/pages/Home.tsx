import axios from "axios";
import { useEffect, useState } from "react";

const mainUrl = "http://localhost:4000";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${mainUrl}/api/students`, {
          withCredentials: true,
        });
        setDatas(res.data.datas);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (index: number) => {
    try {
      const res = await axios.delete(`${mainUrl}/api/students/${index}`, {
        withCredentials: true,
      });

      if (res.data.message === "Success") {
        setSuccess(true);
        setDatas(datas.filter((a: { id: number }) => a.id !== index));
        console.log(datas);
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Failed to delete data");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (success || error) {
      timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [success, error]);

  return (
    <div className="w-full mt-3">
      {(success || error) && (
        <div
          className={`my-3 ${
            success ? "bg-green-300/50" : "bg-red-300/50"
          } rounded-md p-4`}>
          {success ? "Success" : error}
        </div>
      )}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Umur
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Pekerjaan
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {datas &&
              datas?.map((data: any) => (
                <tr
                  key={data.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.nama}
                  </th>
                  <td className="px-6 py-4">{data.umur}</td>
                  <td className="px-6 py-4">{data.alamat}</td>
                  <td className="px-6 py-4">{data.pekerjaan}</td>
                  <td
                    className="px-6 py-4 cursor-pointer"
                    onClick={() => handleDelete(data.id)}>
                    🗑
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
