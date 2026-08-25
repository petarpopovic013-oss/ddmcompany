import Image from "next/image";
import { siteConfig } from "./site-config";

const navigation = [
  ["Delatnosti", "#delatnosti"],
  ["O nama", "#o-nama"],
  ["Auto-kuke", "#auto-kuke"],
  ["Kontakt", "#kontakt"],
] as const;

const carBrands = [
  "mercedes",
  "bmw",
  "audi",
  "volkswagen",
  "hyundai",
  "toyota",
  "skoda",
  "ford",
  "renault",
  "peugeot",
] as const;

const carBrandNames: Record<(typeof carBrands)[number], string> = {
  mercedes: "Mercedes-Benz",
  bmw: "BMW",
  audi: "Audi",
  volkswagen: "Volkswagen",
  hyundai: "Hyundai",
  toyota: "Toyota",
  skoda: "Škoda",
  ford: "Ford",
  renault: "Renault",
  peugeot: "Peugeot",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "AutomotiveBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: "+381603001633",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr Svetislava Kasapinovića 9",
      addressLocality: "Novi Sad",
      postalCode: "21000",
      addressCountry: "RS",
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
    sameAs: [siteConfig.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DDM Company delatnosti",
      itemListElement: siteConfig.businessLines.map((line) => ({
        "@type": "OfferCatalog",
        name: line.name,
        url: line.href,
      })),
    },
  };

  return (
    <div className="site" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
                Servis i održavanje, rent-a-car, motocikli Keeway i Morbidelli,
                auto-prikolice i ugradnja auto-kuka — jedan DDM tim u Novom Sadu.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href={siteConfig.phoneHref}>
                  Pozovite nas <Arrow />
                </a>
                <a className="underlined-link" href="#delatnosti">
                  Izaberite oblast <span aria-hidden="true">↓</span>
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
              <a key={line.id} href={line.href} target="_blank" rel="noreferrer">
                <span>{line.number}</span>
                <strong>{line.name}</strong>
                <Arrow />
              </a>
            ))}
          </nav>
        </section>

        <section className="business-section" id="delatnosti" aria-labelledby="business-title">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">DDM mreža</p>
            <h2 id="business-title">Različite potrebe.<br /><em>Jedan DDM.</em></h2>
            <p>
              Četiri specijalizovana sajta, svako sa jasnom ponudom. Iza svih njih
              stoje DDM Company, ista adresa i direktan kontakt.
            </p>
          </div>

          <nav className="brand-index" aria-label="DDM Company sajtovi">
            {siteConfig.businessLines.map((line) => (
              <a
                className={`brand-panel brand-panel-${line.id}`}
                href={line.href}
                target="_blank"
                rel="noreferrer"
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
                <span className="brand-arrow"><Arrow /></span>
              </a>
            ))}
          </nav>
        </section>

        <section className="about-section" id="o-nama" aria-labelledby="about-title">
          <div className="about-images">
            <figure className="about-image-main">
              <Image src="/images/ddm-exterior.webp" alt="Ulaz u DDM Company u Novom Sadu" fill sizes="(max-width: 1024px) 100vw, 52vw" />
              <figcaption>DDM Company / Novi Sad</figcaption>
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
            <a className="button button-dark" href="#kontakt">Kontaktirajte nas <Arrow /></a>
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
                Zakažite {siteConfig.phoneDisplay} <Arrow />
              </a>
              <a className="underlined-link" href="https://povuci.rs" target="_blank" rel="noreferrer">
                Prikolice i oprema na Povuci.rs <Arrow />
              </a>
            </div>
          </div>

          <div className="car-logo-rail" aria-label="Marke vozila za ugradnju auto-kuka">
            {carBrands.map((brand) => (
              <div className="car-logo" key={brand}>
                <Image
                  src={`/car-logos/${brand}.svg`}
                  alt={carBrandNames[brand]}
                  width={110}
                  height={52}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-primary">
            <p className="eyebrow">Direktan kontakt</p>
            <h2 id="contact-title">Imate pitanje?<br />Pozovite DDM.</h2>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay} <Arrow /></a>
          </div>
          <div className="contact-details">
            <div>
              <span>Adresa</span>
              <p>{siteConfig.address}</p>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Otvori Google mapu <Arrow /></a>
            </div>
            <div>
              <span>Radno vreme</span>
              <p>{siteConfig.hours.weekdays}<br />{siteConfig.hours.saturday}<br />{siteConfig.hours.sunday}</p>
            </div>
            <div>
              <span>Email i Instagram</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.instagramDisplay}</a>
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
            <a href={line.href} target="_blank" rel="noreferrer" key={line.id}>{line.name} <Arrow /></a>
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
