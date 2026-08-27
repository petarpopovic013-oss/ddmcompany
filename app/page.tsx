import Image from "next/image";
import { ArrowIcon } from "./components/arrow-icon";
import { CarLogoCarousel } from "./components/car-logo-carousel";
import { JsonLd } from "./components/json-ld";
import { siteConfig } from "./site-config";

const navigation = [
  ["Delatnosti", "#delatnosti"],
  ["O nama", "#o-nama"],
  ["Auto-kuke", "#auto-kuke"],
  ["Kontakt", "#kontakt"],
] as const;

export default function Home() {
  const absoluteUrl = (url: string) =>
    url.startsWith("http") ? url : `${siteConfig.url}${url}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: "DDM",
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": ["Organization", "AutomotiveBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: "DDM",
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}${siteConfig.logo}`,
          width: 946,
          height: 392,
        },
        image: `${siteConfig.url}/images/ddm-location.webp`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dr Svetislava Kasapinovića 9",
          addressLocality: "Novi Sad",
          postalCode: "21000",
          addressCountry: "RS",
        },
        areaServed: {
          "@type": "City",
          name: "Novi Sad",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "RS",
          availableLanguage: ["sr"],
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "14:00",
          },
        ],
        department: siteConfig.businessLines.map((line) => ({
          "@type": "Organization",
          name: line.name,
          url: absoluteUrl(line.href),
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "DDM Company delatnosti",
          itemListElement: siteConfig.businessLines.map((line) => ({
            "@type": "Offer",
            url: absoluteUrl(line.href),
            itemOffered: {
              "@type": "Service",
              name: line.name,
              description: line.description,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "DDM Company | Sve za vozilo u Novom Sadu",
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/ddm-location.webp`,
          width: 1800,
          height: 1350,
        },
      },
    ],
  };

  return (
    <div className="site" id="top">
      <JsonLd data={structuredData} />

      <header className="header">
        <a className="logo" href="#top" aria-label="DDM Company — početna">
          <Image
            src="/brands/ddm-company.png"
            alt="DDM Company"
            width={946}
            height={392}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <a className="header-call" href={siteConfig.phoneHref}>
          <span>Pozovite</span>
          {siteConfig.phoneDisplay}
        </a>

        <details className="mobile-nav">
          <summary aria-label="Otvori navigaciju"><span /><span /></summary>
          <div className="mobile-nav-panel">
            <p>Meni</p>
            {navigation.map(([label, href], index) => (
              <a href={href} key={href}><span>0{index + 1}</span>{label}</a>
            ))}
            <a className="mobile-nav-call" href={siteConfig.phoneHref}>
              Pozovite {siteConfig.phoneDisplay}
            </a>
          </div>
        </details>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-stage">
            <div className="hero-copy">
              <p className="eyebrow">DDM Company / Novi Sad</p>
              <h1 id="hero-title">
                Sve za vozilo.
                <em>Na jednom mestu.</em>
              </h1>
              <p className="hero-intro">
                Servis i održavanje, SWM automobili, rent-a-car, motocikli Keeway i
                Morbidelli, auto-prikolice i ugradnja auto-kuka — jedan DDM tim u Novom Sadu.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href={siteConfig.phoneHref}>
                  Pozovite nas <ArrowIcon />
                </a>
                <a className="underlined-link" href="#delatnosti">
                  Izaberite oblast <ArrowIcon direction="down" />
                </a>
              </div>
            </div>

            <figure className="hero-image">
              <Image
                src="/images/ddm-location.webp"
                alt="DDM Company salon i servis u Novom Sadu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <figcaption>Dr Svetislava Kasapinovića 9 / Novi Sad</figcaption>
            </figure>
          </div>

          <nav className="hero-directory" aria-label="DDM Company poslovne grane">
            {siteConfig.businessLines.map((line) => (
              <a
                key={line.id}
                href={line.href}
                target={line.href.startsWith("http") ? "_blank" : undefined}
                rel={line.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span>{line.number}</span>
                <strong>{line.name}</strong>
                <ArrowIcon />
              </a>
            ))}
          </nav>
        </section>

        <section className="business-section" id="delatnosti" aria-labelledby="business-title">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">DDM mreža</p>
            <h2 id="business-title">Različite potrebe.<br /><em>Jedan DDM.</em></h2>
            <p>
              Šest specijalizovanih oblasti, svaka sa jasnom ponudom. Iza svih njih
              stoji DDM Company, ista adresa i direktan kontakt.
            </p>
          </div>

          <nav className="brand-index" aria-label="DDM Company sajtovi">
            {siteConfig.businessLines.map((line) => (
              <a
                className={`brand-panel brand-panel-${line.id}`}
                href={line.href}
                target={line.href.startsWith("http") ? "_blank" : undefined}
                rel={line.href.startsWith("http") ? "noreferrer" : undefined}
                key={line.id}
              >
                <span className="brand-number">{line.number}</span>
                <div className="brand-identity">
                  <span className="brand-label">{line.label}</span>
                  <div className="brand-logo">
                    <Image src={line.logo} alt={line.name} width={720} height={240} />
                  </div>
                </div>
                <div className="brand-summary">
                  <p>{line.description}</p>
                  <span>{line.cta}</span>
                </div>
                <span className="brand-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </nav>
        </section>

        <section className="about-section" id="o-nama" aria-labelledby="about-title">
          <div className="about-images">
            <figure className="about-image-main">
              <Image src="/images/ddm-exterior.webp" alt="Ulaz u DDM Company u Novom Sadu" fill sizes="(max-width: 1024px) 100vw, 52vw" />
            </figure>
            <figure className="about-image-small">
              <Image src="/images/ddm-workshop.webp" alt="DDM Company radionica" fill sizes="(max-width: 1024px) 45vw, 20vw" />
            </figure>
          </div>

          <div className="about-copy">
            <p className="eyebrow eyebrow-blue">Jedan tim iza svake usluge</p>
            <h2 id="about-title">DDM Company,<br />Novi Sad.</h2>
            <p className="about-lead">
              DDM Company se bavi servisom, održavanjem, prodajom i iznajmljivanjem
              vozila. Isti tim iz svakodnevnog rada sa automobilima stoji iza naših
              specijalizovanih ponuda za rent-a-car, motocikle, prikolice i auto-kuke.
            </p>
            <div className="about-services" aria-label="DDM Company usluge">
              <span><b>01</b> Servis i održavanje</span>
              <span><b>02</b> Prodaja i distribucija</span>
              <span><b>03</b> Iznajmljivanje vozila</span>
            </div>
            <a className="button button-dark" href="#kontakt">Kontaktirajte nas <ArrowIcon /></a>
          </div>
        </section>

        <section className="towbar-section" id="auto-kuke" aria-labelledby="towbar-title">
          <div className="towbar-heading">
            <p className="eyebrow">Profesionalna ugradnja sa atestom</p>
            <h2 id="towbar-title">Ugradnja<br />auto-kuka.</h2>
          </div>
          <div className="towbar-copy">
            <p>
              Vršimo profesionalnu ugradnju atestiranih euro auto-kuka sa originalnom
              električnom instalacijom i modulom za sve marke i modele putničkih, SUV
              i dostavnih vozila. Svaka kuka poseduje EU homologaciju, prateće
              sertifikate i spremnu dokumentaciju za atest i tehnički pregled.
            </p>
            <div className="towbar-actions">
              <a className="button button-light" href={siteConfig.phoneHref}>
                Zakažite {siteConfig.phoneDisplay} <ArrowIcon />
              </a>
              <a className="underlined-link" href="https://povuci.rs" target="_blank" rel="noreferrer">
                Prikolice i oprema na Povuci.rs <ArrowIcon />
              </a>
            </div>
          </div>

          <CarLogoCarousel />
        </section>

        <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-primary">
            <p className="eyebrow">Direktan kontakt</p>
            <h2 id="contact-title">Imate pitanje?<br />Pozovite DDM.</h2>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay} <ArrowIcon /></a>
          </div>
          <div className="contact-details">
            <div>
              <span>Adresa</span>
              <p>{siteConfig.address}</p>
              <a className="contact-map-link" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Otvori Google mapu <ArrowIcon /></a>
            </div>
            <div>
              <span>Radno vreme</span>
              <p>{siteConfig.hours.weekdays}<br />{siteConfig.hours.saturday}<br />{siteConfig.hours.sunday}</p>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`mailto:${siteConfig.secondaryEmail}`}>{siteConfig.secondaryEmail}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <a className="footer-logo" href="#top" aria-label="DDM Company — vrh stranice">
            <Image src="/brands/ddm-company.png" alt="DDM Company" width={946} height={392} />
          </a>
          <p>Vozila, motocikli i prikolice.<br />Jedan DDM tim u Novom Sadu.</p>
        </div>
        <div className="footer-links">
          <span>DDM mreža</span>
          {siteConfig.businessLines.map((line) => (
            <a
              href={line.href}
              target={line.href.startsWith("http") ? "_blank" : undefined}
              rel={line.href.startsWith("http") ? "noreferrer" : undefined}
              key={line.id}
            >
              {line.name} <ArrowIcon />
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DDM Company. Sva prava zadržana.</span>
          <span>Novi Sad, Srbija</span>
        </div>
      </footer>
    </div>
  );
}
