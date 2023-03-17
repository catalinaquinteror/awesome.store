import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'
import { ButtonLink } from 'src/components/ui/Button'

import Section from '../Section'
import styles from './banner-description.module.scss'

export type BannerDescriptionProps = {
  href?: string
  alt: string
  classBanner: string
  text?: string
  url: string
}

function BannerDescription({
  url,
  href,
  alt,
  classBanner,
  text,
}: BannerDescriptionProps) {
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
            <BannerImage>
              <img src={url} alt={alt} />
            </BannerImage>
          </a>
          <ButtonLink href="" />
        </BannerLink>
      </Banner>
    </Section>
  )
}

export default BannerDescription
