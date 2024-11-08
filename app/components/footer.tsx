function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  const LinkButton = ({ href, text }: { href: string; text: string }) => (
    <li className="w-full">
      <a
        href={href}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-blue-600 bg-white border border-blue-100 transition-all hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{text}</span>
        <ArrowIcon />
      </a>
    </li>
  );

  const CategorySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="mb-6 text-lg font-semibold text-blue-900">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <CategorySection title="Githubs">
            <LinkButton href="https://github.com/kyegomez" text="Kyes GitHub" />
            <LinkButton href="https://github.com/Agora-Lab-AI/" text="Agoras GitHub" />
            <LinkButton href="https://github.com/The-Swarm-Corporation" text="Swarms GitHub" />
          </CategorySection>
          
          <CategorySection title="Resources">
            <LinkButton href="/rss" text="RSS" />
            <LinkButton href="https://lu.ma/swarms_calendar" text="Agora Calendar" />
          </CategorySection>

          <CategorySection title="Blog">
            <LinkButton href="https://medium.com/@kyeg" text="Medium" />
            <LinkButton href="https://agoralab.ai" text="Agora Blog" />
          </CategorySection>
          
          <CategorySection title="Contact">
            <LinkButton href="mailto:kye@kyegomez.com" text="Email" />
            <LinkButton href="tel:+17866955339" text="786-695-5339" />
            <LinkButton href="https://cal.com/swarms" text="Book a Meeting" />
          </CategorySection>
          
          <CategorySection title="Support">
            <LinkButton href="https://github.com/sponsors/kyegomez" text="Sponsor on Github" />
            <LinkButton href="https://buymeacoffee.com/kyegomez" text="Buy Me a Coffee" />
            <LinkButton href="https://polar.sh/kyegomez/" text="Fund Issues on Polar" />
          </CategorySection>

          <CategorySection title="Company Websites">
            <LinkButton href="https://agoralab.ai" text="Agora" />
            <LinkButton href="https://agoralab.xyz" text="Agora Labs" />
          </CategorySection>
        </div>
        <div className="mt-16 pt-8 border-t border-blue-100">
          <p className="text-center text-sm text-blue-500 font-medium">
            © {new Date().getFullYear()} MIT Licensed
          </p>
        </div>
      </div>
    </footer>
  )
}