import { useEffect, useState } from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleUserRound,
  Linkedin,
  Mail,
  Menu,
  Twitter,
  X,
} from 'lucide-react'
import { projects } from './data/projects'
import { contact, profile } from './data/profile'
import './App.css'

const navItems = [
  ['TOP', 'home'],
  ['PROFILE', 'about'],
  ['WORKS', 'projects'],
  ['CONTACT', 'contact'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) {
      setActiveSection('')
      return undefined
    }

    const updateActiveSection = () => {
      const marker = window.scrollY + 120
      let current = sections[0].id
      sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id
      })
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    if (document.getElementById(id)) {
      setActiveSection(id)
      scrollToSection(id)
    } else {
      setActiveSection('')
      window.sessionStorage.setItem('returnSection', id)
      window.location.hash = '/'
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={() => goTo('home')} aria-label="Homeへ戻る">
          <span className="brand-mark">MM</span>
          <span>Miyamoto Michiru</span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'ナビゲーションメニューを閉じる' : 'ナビゲーションメニューを開く'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="メインナビゲーション">
          {navItems.map(([label, id]) => (
            <button key={id} className={activeSection === id ? 'nav-link active' : 'nav-link'} onClick={() => goTo(id)} aria-current={activeSection === id ? 'page' : undefined}>
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

function GeometricDecorations() {
  return <div className="decorations" aria-hidden="true"><div className="triangle-cluster top-left" /><div className="dot-pattern blue-dots" /><div className="lime-circle" /><div className="triangle-cluster bottom-right" /><div className="cross-mark">+</div></div>
}

function HeroArtwork() {
  const moveArtwork = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    event.currentTarget.style.setProperty('--mx', x.toFixed(3))
    event.currentTarget.style.setProperty('--my', y.toFixed(3))
  }

  const resetArtwork = (event) => {
    event.currentTarget.style.setProperty('--mx', '0')
    event.currentTarget.style.setProperty('--my', '0')
  }

  return (
    <div className="hero-art" aria-hidden="true" onMouseMove={moveArtwork} onMouseLeave={resetArtwork}>
      <svg viewBox="0 0 620 620" role="presentation">
        <defs>
          <pattern id="hero-blue-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.2" fill="#1453df" />
          </pattern>
          <pattern id="hero-lime-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.2" fill="#b9d77a" />
          </pattern>
        </defs>
        <g fill="none" stroke="#4f7eea" strokeWidth="1.5" opacity=".75">
          <path d="M36 470L575 92" />
          <path d="M56 166L560 520" />
          <path d="M314 20v574" />
          <path d="M130 582L540 190" />
          <circle cx="142" cy="327" r="37" />
          <circle cx="142" cy="327" r="22" />
          <circle cx="142" cy="327" r="10" />
        </g>
        <circle cx="325" cy="277" r="165" fill="#1449db" opacity=".96" />
        <path d="M325 112a165 165 0 0 1 0 330L325 277Z" fill="#cfd1ff" opacity=".8" />
        <path d="M325 277L488 182v190l-163 95Z" fill="#7380ec" opacity=".76" />
        <path d="M325 277L162 372V182Z" fill="#eef04a" opacity=".9" />
        <path d="M325 277l163 95-163 95z" fill="#164cda" opacity=".9" />
        <path d="M325 277L162 182l163-70z" fill="#ffffff" opacity=".5" />
        <path d="M325 277L488 372l-163 95z" fill="#b8c2ff" opacity=".52" />
        <circle cx="442" cy="430" r="75" fill="#dff05a" opacity=".76" />
        <circle cx="442" cy="430" r="75" fill="url(#hero-lime-dots)" opacity=".33" />
        <rect x="425" y="78" width="146" height="146" fill="url(#hero-blue-dots)" opacity=".95" />
        <rect x="72" y="420" width="115" height="115" fill="url(#hero-blue-dots)" opacity=".2" />
        <g fill="#1453df">
          <circle cx="52" cy="482" r="9" /><circle cx="568" cy="94" r="5" /><circle cx="510" cy="558" r="5" />
        </g>
        <g fill="#b9d77a">
          <circle cx="514" cy="474" r="7" /><circle cx="300" cy="558" r="5" /><circle cx="102" cy="170" r="4" />
        </g>
        <g fill="none" stroke="#1453df" strokeWidth="2">
          <circle cx="112" cy="536" r="12" /><circle cx="518" cy="134" r="13" /><rect x="64" y="278" width="10" height="10" /><rect x="536" y="340" width="10" height="10" />
        </g>
        <g fill="#b9d77a"><path d="M176 111l23 39h-46z" /><path d="M530 252l25 43h-50z" /></g>
        <g fill="#aebcff"><path d="M495 370l35 22-35 22z" /><path d="M180 244l26 17-26 17z" /></g>
      </svg>
    </div>
  )
}

function Hero() {
  return <section id="home" className="hero section-shell"><div className="hero-copy"><p className="eyebrow">AI / SOFTWARE / RESEARCH</p><div className="portfolio-lockup"><h1>PORT<br />FOLIO</h1></div><p className="hero-name">Miyamoto Michiru</p><p className="hero-tagline">現象をデータで捉え、不完全な情報からよりよい意思決定を探る。</p></div><HeroArtwork /><div className="hero-lower-decor" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i className={`decor-triangle triangle-${index + 1}`} key={index} />)}</div></section>
}

function SectionHeader({ icon: Icon, children, link }) {
  return <div className="section-header"><h2><Icon size={22} strokeWidth={1.7} />{children}</h2>{link && <button onClick={() => scrollToSection('projects')} className="section-link">{link} <ArrowRight size={16} /></button>}</div>
}

function ProfilePlaceholder() {
  return <div className="profile-placeholder"><img src={profile.image} alt="宮本 満のプロフィール画像" /></div>
}

function About() {
  return <section id="about" className="section-shell bordered-section about-section"><SectionHeader icon={CircleUserRound}>About Me</SectionHeader><div className="about-layout"><div className="about-copy"><p className="about-name">宮本 満</p><div className="about-text">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div><ProfilePlaceholder /></div></section>
}

function ProjectCard({ project }) { return <Link className="project-card-link" to={`/projects/${project.slug}`} aria-label={`${project.title}の詳細を見る`}><article className="project-card"><div className={`project-art${project.imageZoom ? ' is-zoomed' : ''} ${project.slug}`}>{project.image ? <img src={project.image} alt={`${project.title}のプロジェクト画像`} /> : <div className="project-placeholder" aria-label={`${project.title}の画像プレースホルダー`}><span>{project.title}</span></div>}</div><div className="project-card-body"><div className="project-meta"><span className="project-number">{project.number}</span><time>{project.period}</time></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="card-link">詳細を見る <ArrowRight size={15} /></span></div></article></Link> }

function Projects() {
  const [filter, setFilter] = useState('ALL')
  const filters = ['ALL', 'AI / DATA', 'ROBOTICS']
  const visibleProjects = filter === 'ALL' ? projects : projects.filter((project) => project.category === filter)

  return <section id="projects" className="section-shell bordered-section"><SectionHeader icon={BriefcaseBusiness}>WORKS</SectionHeader><div className="project-filters" role="group" aria-label="プロジェクトをカテゴリで絞り込む">{filters.map((item) => <button key={item} className={filter === item ? 'filter-button is-active' : 'filter-button'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div><div className="projects-grid">{visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>
}


const contactIcons = { Email: Mail, LinkedIn: Linkedin, X: Twitter }
function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.Email.value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return <section id="contact" className="section-shell bordered-section contact-section"><SectionHeader icon={Mail}>Contact</SectionHeader><div className="contact-grid">{Object.entries(contact).map(([label, item]) => { const Icon = contactIcons[label]; if (label === 'Email') return <button className="contact-card contact-card-button" type="button" onClick={copyEmail} key={label} aria-label="メールアドレスをコピー"><Icon size={23} /><div><span>{label}</span><strong>{item.value}</strong><small>{copied ? 'Copied to clipboard' : 'クリックでコピー'}</small></div></button>; return <a className="contact-card" href={item.href} key={label} target={label === 'Location' ? undefined : '_blank'} rel="noreferrer"><Icon size={23} /><div><span>{label}</span><strong>{item.value}</strong></div></a> })}</div></section>
}

function ProjectDetail({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.slug])

  return (
    <>
      <Header />
      <main className="detail-page">
        <section className="detail-content section-shell">
          <div className={`detail-placeholder ${project.slug}`} aria-label={`${project.title}のプロジェクト画像`}>
            {project.image ? <img src={project.image} alt={`${project.title}のプロジェクト画像`} /> : <div className="project-placeholder detail-image-placeholder"><span>{project.title}</span><small>IMAGE COMING SOON</small></div>}
          </div>
          <div className="detail-hero">
            <p className="detail-kicker">{project.number} / PROJECT</p>
            <h1>{project.title}</h1>
          </div>
          <div className="detail-period">活動年：{project.period}</div>
          <div className="detail-tags" aria-label="使用技術">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="detail-highlights" aria-label="プロジェクトの要点"><div><span>ROLE</span><p>{project.role}</p></div><div><span>OUTCOME</span><p>{project.outcome}</p></div><div><span>LEARNING</span><p>{project.learning}</p></div></div>
          <div className="detail-copy">
            {project.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link className="detail-back" to="/" onClick={(event) => { event.preventDefault(); window.sessionStorage.setItem('returnSection', 'projects'); window.location.hash = '/'; window.setTimeout(() => document.getElementById('projects')?.scrollIntoView(), 120) }}>BACK TO WORKS</Link>
        </section>
      </main>
      <footer className="site-footer">© 2026 Miyamoto Michiru</footer>
    </>
  )
}

function HomePage() {
  useEffect(() => {
    const returnSection = window.sessionStorage.getItem('returnSection')
    window.sessionStorage.removeItem('returnSection')
    const hashTarget = returnSection ? document.getElementById(returnSection) : null
    window.requestAnimationFrame(() => {
      if (hashTarget) hashTarget.scrollIntoView()
      else window.scrollTo(0, 0)
    })
  }, [])

  return <><Header /><GeometricDecorations /><main><Hero /><About /><Projects /><Contact /></main><footer className="site-footer">© 2026 Miyamoto Michiru</footer></>
}

function App() { return <HashRouter><Routes><Route path="/" element={<HomePage />} />{projects.map((project) => <Route key={project.slug} path={`/projects/${project.slug}`} element={<ProjectDetail project={project} />} />)}</Routes></HashRouter> }

export default App
