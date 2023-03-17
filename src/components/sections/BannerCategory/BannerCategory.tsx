import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'

import Section from '../Section'
import styles from './banner-category.module.scss'

export type BannerCategoryProps = {
  href: string
  alt: string
  classBanner: string
  text?: string
}

function BannerCategory({
  // title,
  // url,
  href,
  // alt,
  classBanner,
  text,
}: BannerCategoryProps) {
  return (
    <Section className="layout__section">
      <Banner
        variant="horizontal"
        className={styles.fsBannerDescription}
        data-fs-banner-description={classBanner}
      >
        <BannerContent data-fs-banner-description-content={classBanner}>
          {text}
        </BannerContent>
        <BannerLink data-fs-banner-description-link>
          <a href={href}>
            <BannerImage>{/* <img src={url} alt={alt}/> */}</BannerImage>
          </a>
          {/* <ButtonLink href={''}>
            </ButtonLink> */}
        </BannerLink>
      </Banner>
    </Section>
  )
}

export default BannerCategory
