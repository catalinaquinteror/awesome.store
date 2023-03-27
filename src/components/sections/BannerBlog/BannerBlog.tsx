import { Banner, BannerContent, BannerImage, BannerLink } from '@faststore/ui'

import Section from '../Section'
import styles from './banner-blog.module.scss'

export type BannerBlogProps = {
  href: string
  alt: string
  classBanner: string
  url: string
  text?: string
  title?: string
}

function BannerBlog({
  title,
  url,
  href,
  alt,
  classBanner,
  text,
}: BannerBlogProps) {
  return (
    <Section className="layout__section">
      <Banner
        variant="horizontal"
        className={styles.fsBannerBlog}
        data-fs-banner-blog={classBanner}
      >
        <BannerContent data-fs-banner-blog-content={classBanner}>
          {title}
          {text}
          <BannerLink data-fs-banner-blog-link>
            <a href={href}>
              <BannerImage>
                <img src={url} alt={alt} width="100%" />
              </BannerImage>
            </a>
            {/* <ButtonLink href={''}>
            </ButtonLink> */}
          </BannerLink>
        </BannerContent>
      </Banner>
    </Section>
  )
}

export default BannerBlog
