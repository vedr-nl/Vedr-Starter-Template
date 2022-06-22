import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  const [isSending, setIsSending] = useState(false);

  // Call to api -> contact.js with form data
  async function onSubmitForm(values) {
    setIsSending(true);
    let config = {
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      // If api returns 200, then call action succeeded
      const response = await axios(config);
      if (response.status == 200) {
        setIsSending(false);
        reset();
        router.push("/succes");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    /*
     * Form uses react hooks
     * Needs onSubmit function on form and registers on inputs
     * Configure function to call api
     * Configure mailserver in api -> contact.js
     * Configure email credentials in .env
     */
    <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-full max-w-lg">
        <div className="flex flex-wrap mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Naam
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Vul je naam in" })}
          />
          <p className="text-gray-600 text-xs italic">
            <ErrorMessage errors={errors} name="name" />
          </p>
        </div>
        <div className="flex flex-wrap mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            {...register("email", { required: "Vul je e-mail in" })}
          />
          <p className="text-gray-600 text-xs italic">
            <ErrorMessage errors={errors} name="email" />
          </p>
        </div>
        <div className="flex flex-wrap mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Bericht
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            {...register("message", {
              required: "Vul je bericht in",
              maxLength: {
                value: 1000,
                message: "Bericht mag niet langer dan 1000 tekens zijn",
              },
            })}
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            <ErrorMessage errors={errors} name="message" />
          </p>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="transition ease-in-out hover:-translate-y-1 hover:scale-20 shadow bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              <div className="flex">
                <div>Verstuur</div>
                {isSending ? (
                  <div>
                    <svg
                      role="status"
                      className="w-4 h-4 ml-2 mt-1 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : null}
              </div>
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}
