import React from 'react'
import Link from 'next/link'

export default function NavLink({href, children, className, ...props}) {
  return (
    <Link href={`/${href}`} key={href} prefetch={false} passHref>
        <a className={className} {...props}>
            {children}
        </a>
    </Link>
  )
}
