import React from 'react'

export default function Form() {
  return (
    <>
      <form
        action="https://paginas.rocks/Pages/Index/396391"
        method="post"
        className="w-full md:justify-start justify-center"
      >
        <input id="id" name="id" type="hidden" value="396391" />
        <input id="pid" name="pid" type="hidden" value="16149651" />
        <input id="list_id" name="list_id" type="hidden" value="396391" />
        <input id="provider" name="provider" type="hidden" value="leadlovers" />
        <div>
          <input
            className="bg-gray-100 rounded my-4 border border-gray-400 focus:outline-none focus:border-orange-500 text-base py-2 px-4 w-3/4"
            id="name"
            name="name"
            placeholder="Informe o seu nome"
            type="text"
          />
        </div>
        <div>
          <input
            className="bg-gray-100 rounded mb-4 border border-gray-400 focus:outline-none focus:border-orange-500 text-base py-2 px-4 w-3/4"
            id="email"
            name="email"
            placeholder="Informe o seu email"
            type="text"
          />
        </div>
        <button
          className="w-3/4 m-0 text-white bg-orange-500 border-0 py-2 px-2 sm:px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
          type="submit"
        >
          Entrar para o Grupo 🠚
        </button>
        <input type="hidden" id="source" name="source" value="" />
        <img
          src="https://llimages.com/redirect/redirect.aspx?A=V&p=16149651&m=396391"
          style={{ display: 'none' }}
        />
      </form>
    </>
  )
}
