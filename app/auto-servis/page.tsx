import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "DDM Auto servis | Novi Sad",
  description:
    "DDM Auto servis u Novom Sadu — dijagnostika, automehanika, zamena ulja i filtera, klima, kočnice, DPF, gume i pomoć na putu.",
};

const servicePhoneDisplay = "021 2700 017";
const servicePhoneHref = "tel:+381212700017";

const services = [
  "Zamena ulja i filtera",
  "Dijagnostika",
  "Automehanika",
  "Akumulatori",
  "Gume",
  "Servis klime",
  "Kočnice",
  "Čišćenje DPF filtera",
  "Dekarbonizacija motora",
  "Šlep služba",
  "Zamensko vozilo",
] as const;

const authorizedBrands = [
  { name: "GAZ", logo: "/brands/Gaz Logo.webp", width: 1280, height: 1368 },
  { name: "TENAX", logo: "/brands/tenax.png", width: 447, height: 447 },
  { name: "Lada", logo: "/brands/Lada_company_logo.png", width: 478, height: 208 },
  { name: "SWM", logo: "/brands/swm.png", width: 512, height: 170 },
] as const;

const memberships = [
  {
    name: "MOTOO",
    description: "Član profesionalne mreže nezavisnih servisnih radionica u Srbiji.",
    href: "https://www.motoo.rs/",
    logo: "/brands/Motoo.webp",
    width: 720,
    height: 383,
  },
  {
    name: "Auto Servisi Srbija",
    description: "Deo udruženja i baze proverenih auto-servisa širom Srbije.",
    href: "https://www.autoservisisrbija.rs/",
    logo: "/brands/logo.webp",
    width: 64,
    height: 64,
  },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function AutoServisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "DDM Auto servis",
    description:
      "Profesionalno održavanje i popravka vozila u Novom Sadu. Ovlašćeni servis za GAZ, TENAX, Lada i SWM vozila.",
    telephone: "+381212700017",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr Svetislava Kasapinovića 9",
      addressLocality: "Novi Sad",
      postalCode: "21000",
      addressCountry: "RS",
    },
    openingHours: ["Mo-Fr 08:00-16:00", "Sa 08:00-14:00"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge DDM Auto servisa",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
  };

  return (
    <div className="site service-site" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <header className="header">
        <Link className="logo" href="/" aria-label="DDM Company — početna">
          <Image src="/brands/ddm-company.png" alt="DDM Company" width={946} height={392} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Navigacija Auto servisa">
          <Link href="/">Početna</Link>
          <a href="#usluge">Usluge</a>
          <a href="#ovlascenja">Ovlašćenja</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="header-call" href={servicePhoneHref}>
          <span>Auto servis</span>
          {servicePhoneDisplay}
        </a>

        <details className="mobile-nav">
          <summary aria-label="Otvori navigaciju"><span /><span /></summary>
          <div className="mobile-nav-panel">
            <p>Meni</p>
            <Link href="/"><span>01</span>Početna</Link>
            <a href="#usluge"><span>02</span>Usluge</a>
            <a href="#ovlascenja"><span>03</span>Ovlašćenja</a>
            <a href="#kontakt"><span>04</span>Kontakt</a>
            <a className="mobile-nav-call" href={servicePhoneHref}>Pozovite {servicePhoneDisplay}</a>
          </div>
        </details>
      </header>

      <main className="service-main">
        <section className="service-hero" aria-labelledby="service-title">
          <div className="service-hero-copy">
            <p className="eyebrow">DDM Company / Auto servis</p>
            <h1 id="service-title">Siguran servis.<em>Mirna vožnja.</em></h1>
            <p>
              Profesionalno održavanje i popravka vozila,
              uz iskusan tim, savremenu dijagnostiku i jasan dogovor pre svakog rada.
            </p>
            <div className="service-hero-actions">
              <a className="button button-light" href={servicePhoneHref}>Zakažite servis <Arrow /></a>
              <a className="underlined-link" href="#usluge">Pogledajte usluge <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <figure className="service-hero-image">
            <Image
              src="/images/hero servis.JPG"
              alt="Objekat DDM Auto servisa u Novom Sadu"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <figcaption>Dr Svetislava Kasapinovića 9 / Novi Sad</figcaption>
          </figure>

          <div className="service-hero-facts" aria-label="Osnovne informacije o servisu">
            <div><span>01</span><strong>MOTOO partner servis</strong></div>
            <div><span>02</span><strong>4 iskusna mehaničara</strong></div>
            <div><span>03</span><strong>Pon–pet 08–16 / Sub 08–14</strong></div>
          </div>
        </section>

        <section className="service-about" aria-labelledby="service-about-title">
          <div>
            <p className="eyebrow eyebrow-blue">Servis kome se vraćate</p>
            <h2 id="service-about-title">Iskustvo.<br />Oprema.<br /><em>Poverenje.</em></h2>
          </div>
          <div className="service-about-copy">
            <p className="service-about-lead">
              DDM Company je MOTOO partner servis u Novom Sadu za redovno održavanje,
              dijagnostiku i popravke različitih marki i modela vozila.
            </p>
            <p>
              Tim od četiri mehaničara koristi savremenu dijagnostičku opremu i
              kvalitetne delove, uz transparentan pregled potrebnih radova i troškova.
              Cilj je pouzdano vozilo i odnos zbog kojeg znate kome ga ostavljate.
            </p>
          </div>
        </section>

        <section className="service-list-section" id="usluge" aria-labelledby="services-title">
          <div className="service-section-heading">
            <p className="eyebrow">Kompletna briga o vozilu</p>
            <h2 id="services-title">Naše usluge.</h2>
            <p>Od redovnog održavanja do složenije dijagnostike i pomoći kada vozilo stane.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <div className="service-item" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="authorized-section" id="ovlascenja" aria-labelledby="authorized-title">
          <div className="authorized-copy">
            <p className="eyebrow">Fabričko znanje i standardi</p>
            <h2 id="authorized-title">Ovlašćeni servis.</h2>
            <p>
              DDM Auto servis je ovlašćen za servisiranje GAZ i TENAX vozila,
              kao i vozila marki Lada i SWM.
            </p>
          </div>
          <div className="authorized-logos" aria-label="Marke za koje je DDM ovlašćeni servis">
            {authorizedBrands.map((brand) => (
              <div className={`authorized-logo authorized-logo-${brand.name.toLowerCase()}`} key={brand.name}>
                <Image src={brand.logo} alt={brand.name} width={brand.width} height={brand.height} />
              </div>
            ))}
          </div>
        </section>

        <section className="memberships-section" aria-labelledby="memberships-title">
          <div className="memberships-heading">
            <h2 id="memberships-title">Članovi stručnih mreža.</h2>
          </div>
          <div className="membership-grid">
            {memberships.map((membership) => (
              <a href={membership.href} target="_blank" rel="noreferrer" key={membership.name}>
                <div className={`membership-logo membership-logo-${membership.name === "MOTOO" ? "motoo" : "ass"}`}>
                  <Image
                    src={membership.logo}
                    alt={membership.name}
                    width={membership.width}
                    height={membership.height}
                  />
                </div>
                <div>
                  <span>Član udruženja</span>
                  <h3>{membership.name}</h3>
                  <p>{membership.description}</p>
                </div>
                <span className="membership-arrow"><Arrow /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="service-contact" id="kontakt" aria-labelledby="service-contact-title">
          <div className="service-contact-intro">
            <p className="eyebrow">Zakažite termin</p>
            <h2 id="service-contact-title">Dovezite vozilo.<br /><em>Mi brinemo dalje.</em></h2>
            <a href={servicePhoneHref}>{servicePhoneDisplay} <Arrow /></a>
          </div>
          <div className="service-contact-details">
            <div>
              <span>Lokacija</span>
              <p>{siteConfig.address}</p>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Otvori Google mapu <Arrow /></a>
            </div>
            <div className="service-hours-card">
              <span>Radno vreme</span>
              <dl className="service-hours-list">
                <div><dt>Ponedeljak–petak</dt><dd>08:00–16:00</dd></div>
                <div><dt>Subota</dt><dd>08:00–14:00</dd></div>
                <div><dt>Nedelja</dt><dd>Zatvoreno</dd></div>
              </dl>
            </div>
            <div className="service-direct-card">
              <span>Direktan kontakt</span>
              <div className="service-contact-links">
                <a href={servicePhoneHref}><small>Auto servis</small><strong>{servicePhoneDisplay}</strong></a>
                <a href={siteConfig.phoneHref}><small>DDM Company</small><strong>{siteConfig.phoneDisplay}</strong></a>
                <a href={`mailto:${siteConfig.email}`}><small>Email</small><strong>{siteConfig.email}</strong></a>
                <a href={`mailto:${siteConfig.secondaryEmail}`}><small>Email</small><strong>{siteConfig.secondaryEmail}</strong></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer service-footer">
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="DDM Company — početna">
            <Image src="/brands/ddm-company.png" alt="DDM Company" width={946} height={392} />
          </Link>
          <p>Servis, održavanje i pouzdana podrška.<br />DDM tim u Novom Sadu.</p>
        </div>
        <div className="footer-links">
          <span>Brzi linkovi</span>
          <Link href="/">DDM Company <Arrow /></Link>
          <a href="#usluge">Usluge <Arrow /></a>
          <a href="#ovlascenja">Ovlašćenja <Arrow /></a>
          <a href="#kontakt">Kontakt <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DDM Company. Sva prava zadržana.</span>
          <span>Novi Sad, Srbija</span>
        </div>
      </footer>
    </div>
  );
}
