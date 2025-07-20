import { useState } from "react";
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
    <main className="min-h-screen text-white flex flex-col items-center">
      <Header initialTerm={initialTerm} onSearchHeader={onSearchHeader} />
      <Hero />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}

function Header({ initialTerm, onSearchHeader }: { initialTerm: string, onSearchHeader: (search: string) => void; }) {
  return (
    <header className="max-w-7xl w-full max-h-16 flex items-center justify-between px-4 lg:px-10 py-4 border-b border-gray-300 mx-auto">
      <a href="/" className="flex items-center gap-2 lg:gap-4">
        <img
          src="/task1/logo.webp"
          alt="Wortionary - Logo"
          className="w-4 h-4"
        />
        <h1 className="text-white font-bold text-lg">Wortionary</h1>
      </a>

      <nav className="flex items-center gap-4 lg:gap-8">
        {/* Search Controled */}
        <search role="search" className="relative">
          <span className="absolute left-4 inset-y-0 flex items-center">
            <Search className="text-gray-300 text-2xl" aria-hidden="true" />
          </span>
          <Input
            id="main-search"
            type="search"
            inputMode="text"
            value={initialTerm}  // Value controles
            onChange={(event) => onSearchHeader(event.target.value)}  // HandlerSearchValue
            placeholder="Search"
            className="max-w-40 pl-12 bg-gray-800 text-white placeholder:text-base placeholder:text-gray-300 border-none focus:ring-0 rounded-xl w-full focus-visible:ring-0"
            aria-label="Search in Wortionary"
          />
        </search>

        <Avatar className="w-8 h-8">
          <AvatarImage src="/task1/profile.webp" alt="User profile picture" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
}

function Hero() {
  const onSearchHero = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const query = formData.get("search")
    console.log(query)

    // Clear the input after submit
    event.currentTarget.reset()
    // implementing the search logic is not required for this task
  }

  return (
    <section
      aria-labelledby="hero-headsing"
      className="max-h-[480px] container relative mt-9 mb-4 lg:px-4 w-calc-100-48 lg:w-full rounded-xl overflow-hidden"
    >
      <img
        src="/task1/hero-bg.webp"
        alt="Hero image"
        className="w-full h-full min-h-[60vh] object-cover"
        aria-hidden="true"
        role="presentation"
      />

      <div
        className="absolute inset-0  rounded-xl lg:mx-4 flex flex-col items-center justify-center gap-8 text-center bg-gradient-linear"
      >
        <h1
          id="hero-heading"
          className="px-8 mb-4 text-5xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Search for words, phrases and meanings
        </h1>

        {/* SearchComponent */}
        <SearchHero initialValue="" onSearch={onSearchHero} />
      </div>
    </section>
  );
}

function SearchHero({ initialValue, onSearch, }: {
  initialValue: string;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}) {

  return (
    <form
      onSubmit={onSearch}
      className="flex items-center w-calc-100-48 lg:w-full max-w-[480px] max-h-16 pl-4 pr-2 py-5 bg-gray-900 border border-gray-600 rounded-xl shadow-lg"
    >
      <Search className="w-5 h-5 text-gray-300" />
      <Input
        defaultValue={initialValue}
        name="search"
        type="text"
        placeholder="Type to search..."
        className="flex-1 px-2 bg-transparent border-none text-white placeholder:text-gray-400 focus-visible:ring-0 shadow-none"
      />
      <Button
        type="submit"
        className="ml-4 py-3 px-5 h-auto rounded-xl bg-blue-500 hover:bg-blue-700 text-white text-base font-bold"
      >
        Search
      </Button>
    </form>
  );
}
interface TagListProp {
  title: string,
  tags: string[],
}

function TagList({ title, tags }: TagListProp) {
  return (
    <section className="container flex flex-col justify-start items-start max-w-5xl mx-auto">
      <h2 className="text-white text-lg font-bold px-4 pt-4 pb-2">{title}</h2>

      <ul
        className="flex flex-wrap gap-3 p-3"
        role="list"
        aria-label={`Related tags ${title}`}
      >
        {tags.map((tag) => {
          return (
            <li key={tag} role="listitem">
              <Badge
                className="bg-gray-800 text-sm font-medium rounded-xl text-white hover:bg-gray-700 flex justify-center items-center py-1.5 px-4 cursor-pointer"
                aria-label={`Select ${tag}`}
                tabIndex={0} // this make focusable witch tab
              >
                {tag}
              </Badge>
            </li>
          )

        })}
      </ul>
    </section>
  );
}



