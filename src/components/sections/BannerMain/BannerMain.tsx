import { Banner, BannerContent, BannerLink } from '@faststore/ui'
// import { ButtonLink } from 'src/components/ui/Button'
// import type { HTMLAttributes } from 'react'

import Section from '../Section'
import styles from './banner-main.module.scss'

export type BannerMainProps = {
  href: string
  alt: string
  classBanner: string
  text?: string
  url: string
}

function BannerMain({
  // title,
  // url,
  // href,
  // alt,
  classBanner,
  text,
}: BannerMainProps) {
  return (
    <Section className="layout__section">
      <Banner
        variant="horizontal"
        className={styles.fsBannerMain}
        data-fs-banner-main={classBanner}
      >
        <BannerContent data-fs-banner-main-content={classBanner}>
          {text}
        </BannerContent>
        <BannerLink data-fs-banner-main-link>
          {/* <a href={href}>
            <BannerImage>
              <img src={url} alt={alt} />
            </BannerImage>
          </a> */}
          {/* <ButtonLink href="" /> */}
        </BannerLink>
      </Banner>
    </Section>
  )
}

export default BannerMain
