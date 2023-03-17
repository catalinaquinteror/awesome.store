import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'

import Section from '../Section'
import styles from './banner-blog.module.scss'

export type BannerBlogProps = {
  href: string
  alt: string
  classBanner: string
  text?: string
}

function BannerBlog({
  // title,
  // url,
  href,
  // alt,
  classBanner,
  text,
}: BannerBlogProps) {
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

export default BannerBlog
