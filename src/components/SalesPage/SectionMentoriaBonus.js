import React from 'react'

const SectionMentoriaBonus = () => {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 ">
            <h3 className="sm:text-2xl text-xl sm:w-11/12 sm:w-2/3 font-medium title-font mb-4 text-gray-900 mx-auto">
              Eu estou realmente comprometida a ajudar quem está disposto a ser
              um(a) Engenheiro(a) de Destaque, então resolvi que:
            </h3>
            <h2 className="sm:text-5xl text-3xl w-11/12 sm:w-4/5 font-bold title-font mb-4 text-gray-900 mx-auto">
              Os <span className="text-yellow-500">5 Primeiros</span> que
              Aquirirem este Treinamento Irão Ganhar uma{' '}
              <span className="text-yellow-500">
                Sessão de Mentoria Comigo de Presente!
              </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionMentoriaBonus
