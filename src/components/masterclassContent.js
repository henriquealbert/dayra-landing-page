import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function MasterclassContent() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className=" text-3xl font-medium font-bold text-center title-font text-gray-900 mb-4">
            O que você aprenderá nesta Masterclass?
          </h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Irei compartilhar segredos e técnicas exclusivas para ajudar você
            crescer profissionalmente como engenheiro e se destacar no mercado
            de trabalho.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">
                Soft Skills como Vantagem Competitiva no Mercado de Trabalho
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">
                O Impacto do Planejamento de Carreira
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">
                Os 3 Elementos de Ouro do Crescimento Profissional
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">
                Como se Destacar em Processos Seletivos e no Trabalho Através
                das Softs Skills
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <ScrollLink
            to="cadastro"
            smooth={true}
            duration={1000}
            className="mx-auto text-white cursor-pointer bg-orange-500 border-0 py-4 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
          >
            Quero me Inscrever na Masterclass
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}
