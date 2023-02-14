import { List as UIList } from '@faststore/ui'
import type { AnchorHTMLAttributes } from 'react'
// import RegionalizationButton from 'src/components/regionalization/RegionalizationButton'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'

import styles from './navlinks.module.scss'

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  classes?: string
}

const collections = [
  {
    name: 'Viajes y uso diario',
    href: '/viajes--y-uso-diario',
  },
  {
    name: 'Fotografia',
    href: '/kitchen---home-appliances',
  },
  {
    name: 'Ciclismo',
    href: '/https://www.falabella.com.co/falabella-co',
  },
  {
    name: 'Accesorios',
    href: '/kitchen---home-appliances',
  },
  {
    name: 'Ver todo',
    href: '/computer---software',
  },
  {
    name: 'Inspiración',
    href: '/technology',
  },
]

function NavLinks({ onClickLink, classes = '' }: NavLinksProps) {
  return (
    <nav className={`${styles.fsNavlinks} ${classes}`}>
      <div className="layout__content" data-fs-navlinks-content>
        {/* <RegionalizationButton /> */}
        <UIList data-fs-navlinks-list>
          {collections.map(({ href, name }) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link
                variant="display"
                href={href}
                onClick={onClickLink}
              >
                {name}
              </Link>
            </li>
          ))}
        </UIList>
      </div>
    </nav>
  )
}

export default mark(NavLinks)
