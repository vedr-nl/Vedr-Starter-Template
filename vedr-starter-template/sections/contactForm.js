import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { useRouter } from 'next/router'

export default function ContactForm() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const router = useRouter()

  // Call to api -> contact.js with form data
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };
    try {
      // If api returns 200, then call action succeeded
      const response = await axios(config);
      if(response.status == 200) {
        reset()
        router.push('/succes')
      }
    } catch (error) {
      console.error(error)
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
  <form onSubmit={handleSubmit(onSubmitForm)} className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
        Naam
      </label>
      <input 
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="grid-name" 
        type="text" 
        placeholder="John Doe"
        {...register("name", { required: "Vul je naam in" })}
        />
        <p className="text-gray-600 text-xs italic"><ErrorMessage errors={errors} name="name" /></p>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          E-mail
        </label>
        <input 
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="email" 
          type="email"
          {...register("email", { required: "Vul je e-mail in" })}
          />
        <p className="text-gray-600 text-xs italic"><ErrorMessage errors={errors} name="email" /></p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Bericht
        </label>
        <textarea 
          className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
          id="message"
          {...register("message", { 
            required: "Vul je bericht in",
            maxLength: {
              value: 1000,
              message: "Bericht mag niet langer dan 1000 tekens zijn"
            }
          })}
          ></textarea>
          <p className="text-gray-600 text-xs italic"><ErrorMessage errors={errors} name="message" /></p>
      </div>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3">
        <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Verstuur
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  </form>
)}
