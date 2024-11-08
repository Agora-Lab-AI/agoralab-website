import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  }
}

export function Navbar() {
  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-center bg-white shadow-sm rounded-full mx-auto max-w-fit"
          id="nav"
        >
          <div className="flex flex-row py-2 px-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-[15px] font-medium text-gray-600 hover:text-blue-500 flex items-center py-1 px-4 rounded-full hover:bg-blue-50"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
