export const siteConfig = {
  name: "DDM Company",
  description:
    "Servis i održavanje, SWM automobili, rent-a-car, Keeway i Morbidelli motocikli, Vesta i Trigano prikolice i ugradnja auto-kuka u Novom Sadu.",
  phoneDisplay: "060 300 16 33",
  phoneHref: "tel:+381603001633",
  email: "ddmcompany@gmail.com",
  secondaryEmail: "vladimir.ddmcompany@gmail.com",
  address: "Dr Svetislava Kasapinovića 9, 21000 Novi Sad",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Svetislava+Kasapinovi%C4%87a+9%2C+21000+Novi+Sad",
  hours: {
    weekdays: "Radni dani 08:00–16:00",
    saturday: "Subota 08:00–14:00",
    sunday: "Nedelja zatvoreno",
  },
  businessLines: [
    {
      id: "rentacar",
      number: "01",
      name: "DDM Rent a Car",
      label: "Iznajmljivanje vozila",
      description:
        "Pouzdana vozila, jasne cene i direktan dogovor sa našim timom u Novom Sadu.",
      href: "https://rentacarddm.rs",
      cta: "Izaberite vozilo",
      logo: "/brands/ddm-company.png",
    },
    {
      id: "swm",
      number: "02",
      name: "SWM Automobili",
      label: "Prodaja kineskih automobila",
      description:
        "Prodaja novih kineskih SWM automobila uz direktne informacije o modelima, opremi i dostupnosti.",
      href: "https://swm-auto.rs/",
      cta: "Pogledajte modele",
      logo: "/brands/swm.png",
    },
    {
      id: "keeway",
      number: "03",
      name: "Keeway Srbija",
      label: "Motocikli i skuteri",
      description:
        "Savremeni motocikli i skuteri za svakodnevnu vožnju, gradske rute i nove puteve.",
      href: "https://keeway.rs",
      cta: "Pogledajte modele",
      logo: "/brands/keeway.png",
    },
    {
      id: "morbidelli",
      number: "04",
      name: "Morbidelli Srbija",
      label: "Motocikli",
      description:
        "Italijansko trkačko nasleđe, savremena tehnologija i motocikli dizajnirani za karakter.",
      href: "https://morbidelli.rs",
      cta: "Otkrijte Morbidelli",
      logo: "/brands/morbidelli.webp",
    },
    {
      id: "povuci",
      number: "05",
      name: "Povuci.rs",
      label: "Auto-prikolice",
      description:
        "Nove Vesta i Trigano auto-prikolice, fabričke cene i kompletna dokumentacija za registraciju.",
      href: "https://povuci.rs",
      cta: "Pronađite prikolicu",
      logo: "/brands/povuci.png",
    },
    {
      id: "autoservis",
      number: "06",
      name: "DDM Auto servis",
      label: "Servis i održavanje",
      description:
        "Profesionalno održavanje i servisiranje vozila na DDM Company lokaciji u Novom Sadu.",
      href: "/auto-servis",
      cta: "Posetite Auto servis",
      logo: "/brands/ddm-company.png",
    },
  ],
} as const;
