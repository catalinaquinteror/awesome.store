import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'

import Section from '../Section'
import styles from './banner-category.module.scss'

export type BannerCategoryProps = {
  href: string
  alt: string
  classBanner: string
  text?: string
  title: string
  url: string
}

function BannerCategory({
  title,
  url,
  href,
  alt,
  classBanner,
  text,
}: BannerCategoryProps) {
  return (
    <Section className="layout__section">
      <Banner
        variant="horizontal"
        className={styles.fsBannerCategory}
        data-fs-banner-category={classBanner}
      >
        <BannerContent data-fs-banner-category-content={classBanner}>
          {title}
          <BannerLink data-fs-banner-category-link>
            <a href={href}>
              <BannerImage>
                <img src={url} alt={alt} width="100%" />
              </BannerImage>
            </a>
            <a href={href}>
              <BannerImage>
                <img src={url} alt={alt} width="100%" />
              </BannerImage>
            </a>
            <a href={href}>
              <BannerImage>
                <img src={url} alt={alt} width="100%" />
              </BannerImage>
            </a>
            {/* <ButtonLink href={''}>
            </ButtonLink> */}
          </BannerLink>
        </BannerContent>
        {text}
      </Banner>
    </Section>
  )
}

export default BannerCategory
