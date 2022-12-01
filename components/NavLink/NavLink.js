import React from 'react'
import Link from 'next/link'

export default function NavLink({href, children, className, ...props}) {
  return (
    <Link href={href} passHref>
        <a className={className} {...props}>
            {children}
        </a>
    </Link>
  )
}
