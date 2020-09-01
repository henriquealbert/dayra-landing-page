import React from 'react'
import SEO from '../../components/seo'
import SectionHero from '../../components/SalesPage/SectionHero'
import SectionWhoIsFor from '../../components/SalesPage/SectionWhoIsFor'
import SectionCourseContent from '../../components/SalesPage/SectionCourseContent'
import SectionDepoimentos from '../../components/SalesPage/SectionDepoimentos'
import SectionBonus from '../../components/SalesPage/SectionBonus'
import SectionMentoriaBonus from '../../components/SalesPage/SectionMentoriaBonus'
import SectionPrice from '../../components/SalesPage/SectionPrice'
import SectionGarantia from '../../components/SalesPage/SectionGarantia'
import SectionFaq from '../../components/SalesPage/SectionFaq'
import SectionAutoridade from '../../components/SalesPage/SectionAutoridade'

const EngenheiroDestaque = () => {
  return (
    <div>
      <SEO
        keywords={[`engenharia`, `consultoria`, `engenheiro consultor`]}
        title="Engenheiro de Destaque"
      />
      <SectionHero />
      <SectionWhoIsFor />
      <SectionAutoridade />
      <SectionCourseContent />
      <SectionDepoimentos />
      <SectionBonus />
      <SectionMentoriaBonus />
      <SectionPrice />
      <SectionGarantia />
      <SectionFaq />
    </div>
  )
}

export default EngenheiroDestaque
