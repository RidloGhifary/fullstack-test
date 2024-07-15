import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Inputs = {
  nama: string;
  nomor: string;
  tempat_tanggal_lahir: string;
  alamat: string;
  pekerjaan: string;
};

const mainUrl = "http://localhost:4000";

export default function Insert() {
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axios.post(`${mainUrl}/api/students`, data, {
      withCredentials: true,
    });

    if (res.data.message !== "Success") {
      setError(res.data.message);
      return;
    }

    navigate("/");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <div className="text-rose-300/50 p-4 rounded-md">{error}</div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="nama"
                  type="text"
                  required
                  placeholder="William Roosevelt"
                  autoComplete="nama"
                  {...register("nama", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.nama && (
                  <span className="text-red-500">{errors.nama.message}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="nomor"
                className="block text-sm font-medium leading-6 text-gray-900">
                Nomor
              </label>
              <div className="mt-2">
                <input
                  id="nomor"
                  type="nomor"
                  required
                  placeholder="08123456789"
                  autoComplete="nomor"
                  {...register("nomor", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.nomor && (
                  <span className="text-red-500">{errors.nomor.message}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="tempat_tanggal_lahir"
                className="block text-sm font-medium leading-6 text-gray-900">
                Tempat tanggal lahir
              </label>
              <div className="mt-2">
                <input
                  id="tempat_tanggal_lahir"
                  type="tempat_tanggal_lahir"
                  required
                  {...register("tempat_tanggal_lahir", { required: true })}
                  placeholder="XXXX, dd/mm/yyyy"
                  autoComplete="tempat_tanggal_lahir"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.tempat_tanggal_lahir && (
                  <span className="text-red-500">
                    {errors.tempat_tanggal_lahir.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="alamat"
                className="block text-sm font-medium leading-6 text-gray-900">
                Alamat
              </label>
              <div className="mt-2">
                <textarea
                  id="alamat"
                  required
                  placeholder="XXXX, dd/mm/yyyy"
                  autoComplete="alamat"
                  rows={3}
                  {...register("alamat", { required: true })}
                  className="resize-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.alamat && (
                  <span className="text-red-500">{errors.alamat.message}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="pekerjaan"
                className="block text-sm font-medium leading-6 text-gray-900">
                Pekerjaan
              </label>
              <div className="mt-2">
                <select
                  id="pekerjaan"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("pekerjaan", { required: true })}>
                  <option value="">None</option>
                  <option value="programmer">Programmer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
