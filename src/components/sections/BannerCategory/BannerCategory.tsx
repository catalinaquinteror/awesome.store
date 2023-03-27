import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'

import Section from '../Section'
import styles from './banner-category.module.scss'

export type BannerCategory = {
  elements: BannerCategoryProps[]
}

export type BannerCategoryProps = {
  href: string
  alt: string
  classBanner: string
  text?: string
  url: string
}

function BannerCategory({ elements }: BannerCategory) {
  return (
    <Section className="layout__section--category">
      <Banner variant="horizontal" className={styles.fsBannerCategory}>
        {elements?.map(({ href, alt, classBanner, text, url }, index) => (
          <BannerContent
            data-fs-banner-category-content={classBanner}
            key={index}
          >
            <BannerImage>
              <img src={url} alt={alt} width="100%" />
            </BannerImage>
            <BannerLink data-fs-banner-category-link>
              <a href={href}>{text}</a>
              {/* <ButtonLink href={''}>
            </ButtonLink> */}
            </BannerLink>
          </BannerContent>
        ))}
      </Banner>
    </Section>
  )
}

export default BannerCategory
