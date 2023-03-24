import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'
// import { ButtonLink } from 'src/components/ui/Button'

import Section from '../Section'
import styles from './banner-description.module.scss'

export type BannerDescriptionProps = {
  href?: string
  alt: string
  classBanner: string
  text?: string
  url: string
  title: string
}

function BannerDescription({
  url,
  href,
  alt,
  classBanner,
  text,
  title,
}: BannerDescriptionProps) {
  return (
    <Section className="layout__section">
      <Banner
        variant="horizontal"
        className={styles.fsBannerDescription}
        data-fs-banner-description={classBanner}
      >
        <BannerContent data-fs-banner-description-content={classBanner}>
          {title}
          {text}
        </BannerContent>
        <BannerLink data-fs-banner-description-link>
          <a href={href}>
            <BannerImage data-fs-banner-description-image={classBanner}>
              <img src={url} alt={alt} width="100%" />
            </BannerImage>
          </a>
          {/* <ButtonLink href="" /> */}
        </BannerLink>
      </Banner>
    </Section>
  )
}

export default BannerDescription
