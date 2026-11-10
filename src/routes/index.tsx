import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import crown from "@/assets/corona_crown_club.png.asset.json";
import capBlack from "@/assets/cap_black.jpg";
import capRed from "@/assets/cap_red.jpg";
import capWhite from "@/assets/cap_white.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crown Club — Gorras exclusivas desde Rosario" },
      { name: "description", content: "Gorras con diseño exclusivo y detalles premium. Consultá stock y envíos por WhatsApp." },
      { property: "og:title", content: "Crown Club — Eleva tu estilo" },
      { property: "og:description", content: "Gorras exclusivas nacidas en Rosario. Consultá stock y envío." },
    ],
  }),
  component: Index,
});

// TODO: reemplazar por el número real de WhatsApp (formato internacional sin +)
const WHATSAPP = "5493410000000";

type Product = { id: string; name: string; tag: string; desc: string; img: string; colors: string[] };

const PRODUCTS: Product[] = [
  { id: "royal", name: "Royal Snapback", tag: "Más vendida", desc: "Visera plana, corona bordada en relieve y cierre ajustable. La clásica del club.", img: capBlack, colors: ["Negro", "Rojo"] },
  { id: "trucker", name: "Red Trucker", tag: "Nuevo drop", desc: "Frente de gabardina y malla trasera respirable. Ideal para el verano.", img: capRed, colors: ["Rojo/Negro"] },
  { id: "dad", name: "Clean Dad Hat", tag: "Edición limitada", desc: "Visera curva, algodón lavado y caída suave. Minimal y fácil de combinar.", img: capWhite, colors: ["Crudo"] },
];

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function Index() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-center leading-none">
            <span className="block font-display text-xl font-extrabold tracking-[0.15em] text-primary text-glow md:text-2xl">CROWN CLUB</span>
            <span className="mt-1 block text-[10px] tracking-[0.3em] text-muted-foreground">EST. | ROSARIO</span>
          </a>
          <nav className="flex gap-5 text-xs font-semibold uppercase tracking-wider md:gap-8 md:text-sm">
            <a href="#historia" className="hover:text-primary">Historia</a>
            <a href="#catalogo" className="hover:text-primary">Catálogo</a>
            <a href="#envios" className="hidden hover:text-primary sm:inline">Envíos</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-hero px-5 pb-20 pt-12 text-center">
        <img src={crown.url} alt="Corona Crown Club" className="animate-float mx-auto w-64 drop-shadow-[0_10px_40px_rgba(255,0,45,0.35)] md:w-80" />
        <h1 className="mt-6 font-display text-5xl font-extrabold md:text-7xl">
          ELEVA TU <span className="text-primary text-glow">ESTILO</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Diseños exclusivos, detalles premium. La verdadera corona se lleva en la cabeza. Nacido en Rosario, creado para el mundo.
        </p>
        <a href="#catalogo" className="mt-10 inline-block rounded-full bg-primary px-10 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:scale-105 hover:bg-primary-glow">
          Ver catálogo
        </a>
      </section>

      <div className="overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-sm font-bold tracking-widest">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["👑 NUEVO DROP", "ENVÍOS A TODO EL PAÍS", "STOCK LIMITADO", "HECHO EN ROSARIO", "UNITE AL CLUB"].map((t) => <span key={t + i}>{t}</span>),
          )}
        </div>
      </div>

      <section id="historia" className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Nuestra <span className="text-primary">historia</span></h2>
        <p className="mt-6 text-muted-foreground">
          Crown Club nació en las calles de Rosario con una idea simple: que cada uno lleve su propia corona. Hacemos gorras para los que marcan tendencia, no para los que la siguen.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[["Diseño propio", "Drops únicos que no vas a ver en otro lado."], ["Calidad premium", "Bordados y materiales que aguantan todo."], ["Stock limitado", "Pocas unidades por modelo. Si te gusta, no esperes."]].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Catálogo</h2>
        <p className="mt-3 text-center text-muted-foreground">Tocá una gorra para ver detalles y consultar.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <button key={p.id} onClick={() => setSelected(p)} className="group overflow-hidden rounded-3xl border border-border bg-card text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-glow">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={816} height={816} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-4 inline-block text-sm font-bold uppercase text-primary">Ver más →</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="envios" className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">¿Cómo <span className="text-primary">comprar</span>?</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {[["1", "Elegí tu gorra", "Mirá el catálogo y elegí tu favorita."], ["2", "Consultá por WhatsApp", "Te confirmamos stock y precio al toque."], ["3", "Recibila", "Retiro en Rosario o envío a todo el país."]].map(([n, t, d]) => (
            <li key={n} className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="font-display text-4xl font-extrabold text-primary">{n}</span>
              <h3 className="mt-2 font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <a href={waLink("¡Hola Crown Club! Quiero consultar por stock y envío 👑")} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-primary px-10 py-4 font-bold uppercase text-primary-foreground shadow-glow transition hover:scale-105">
            Consultar ahora
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} CROWN CLUB · EST. | ROSARIO
      </footer>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [color, setColor] = useState(product.colors[0]);
  const [envio, setEnvio] = useState("Envío a domicilio");
  const [ciudad, setCiudad] = useState("");
  const msg = `¡Hola Crown Club! 👑 Quiero consultar por la gorra *${product.name}* (${color}).\n¿Hay stock?\nForma de entrega: ${envio}${ciudad ? `\nCiudad: ${ciudad}` : ""}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur sm:items-center sm:p-5" onClick={onClose}>
      <div className="max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-card sm:rounded-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="grid sm:grid-cols-2">
          <img src={product.img} alt={product.name} className="aspect-square w-full object-cover" />
          <div className="flex flex-col p-6">
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">{product.tag}</span>
              <button onClick={onClose} aria-label="Cerrar" className="text-2xl leading-none text-muted-foreground hover:text-foreground">×</button>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold">{product.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{product.desc}</p>

            <label className="mt-5 text-xs font-bold uppercase tracking-wider">Color</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`rounded-full border px-4 py-1.5 text-sm ${c === color ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>{c}</button>
              ))}
            </div>

            <label className="mt-5 text-xs font-bold uppercase tracking-wider">Entrega</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Envío a domicilio", "Retiro en Rosario"].map((o) => (
                <button key={o} onClick={() => setEnvio(o)} className={`rounded-full border px-4 py-1.5 text-sm ${o === envio ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>{o}</button>
              ))}
            </div>
            {envio === "Envío a domicilio" && (
              <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Tu ciudad" className="mt-3 rounded-xl border border-input bg-background px-4 py-2 text-sm outline-none focus:border-primary" />
            )}

            <a href={waLink(msg)} target="_blank" rel="noreferrer" className="mt-6 rounded-full bg-primary py-3 text-center font-bold uppercase text-primary-foreground shadow-glow transition hover:bg-primary-glow">
              Consultar stock y envío
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
