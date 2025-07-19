import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  //Add state to control change in input search on Header
  const [initialTerm, setInitialTerm] = useState("")

  //handle of value in input search
  const onSearchHeader = (search: string) => {
    setInitialTerm(search)
    console.log(search);
    // implementing the search logic is not required for this task
  };

  type TagVariants = "NFT" | "Metaverse" | "Sustainable" | "Sonder" | "FOMO" | "Ghosting";

  const tags: TagVariants[] = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      <Header initialTerm={initialTerm} onSearchHeader={onSearchHeader} />
      <Hero />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}

function Header({ initialTerm, onSearchHeader }: { initialTerm: string, onSearchHeader: (search: string) => void; }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <a href="/" className="flex items-center gap-2">
        <img
          src="/task1/logo.png"
          alt="Wortionary - Logo"
          className="w-10 h-10"
          width="40"
          height="40"
        />
        <h1 className="text-white font-semibold text-lg">Wortionary</h1>
      </a>

      <nav className="flex items-center gap-4">
        {/* Search Controled */}
        <div role="search" className="relative">
          <div className="absolute left-3 top-2.5">
            <Search className="text-gray-400 text-sm" aria-hidden="true" />
          </div>
          <Input
            id="main-search"
            type="search"
            inputMode="text"
            value={initialTerm}  // Value controles
            onChange={(event) => onSearchHeader(event.target.value)}  // HandlerSearchValue
            placeholder="Search"
            className="pl-9 bg-gray-800 text-white border-none focus:ring-0 rounded-full w-full"
            aria-label="Buscar en Wortionary"
          />
        </div>

        <Avatar className="w-8 h-8">
          <AvatarImage src="/task1/profile.webp" alt="Foto de perfil" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
}

function Hero() {
  const onSearchHero = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <section aria-labelledby="hero-heading" className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      {/* Imagen decorativa (si es puramente visual) */}
      <img
        src="/task1/hero-bg.png"
        alt=""
        className="w-full h-96 object-cover"
        aria-hidden="true"
        role="presentation"
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 id="hero-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">
          Search for words, phrases and meanings
        </h1>

        {/* Componente de búsqueda */}
        <SearchHero
          initialValue=""
          onSearch={onSearchHero}
          aria-labelledby="hero-heading"
        />
      </div>
    </section>
  );
}

function SearchHero({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg">
      <Search className="text-gray-400 mr-3" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
        Search
      </Button>
    </div>
  );
}

function TagList({ title, tags }) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}



