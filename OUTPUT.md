# Project Refactor - React 18 Migration

## Changes Made

### [Home Component]

1. Move app to folder pages  
   - Issue: Current structure limits project scalability for new pages/sections  
   - Fix: Moved App to `/pages` directory and updated import paths  

2. Rename App to Home
   - Issue: Component name "App" didn't reflect its role as main page  
   - Fix: Renamed to `Home.jsx` with updated route configuration  

3. Replace static tags useState with VariantType dictionary (Line 19)  
   - Issue: Unnecessary React state usage for static tag values (`["NFT","Metaverse",...]`)  
   - Fix: Created `type TagVariants` and `TAGS` constant dictionary  

4. Controlled search state (Line 10-17)  
   - Issue: Missing state management in parent component  
   - Fix: Implemented `const [initialTerm, setInitialTerm] = useState("")` and handler  

5. Component organization  
   - Issue: Components not logically grouped  
   - Fix: Reordered components by feature hierarchy  

### [Header Component]

1. Logo redirection (Line 43)  
   - Issue: Clicking logo didn't navigate to home  
   - Fix: Added `<a href="/">` wrapper with proper hover states  

2. HTML semantic structure (Line 51)  
   - Issue: Used generic `<div>` for header content  
   - Fix: Implemented `<header>` + `<nav>` + `<h1>` hierarchy  

3. Image accessibility (Line 44)  
   - Issue: `<img>` missing alt text  
   - Fix: Added `alt="Wortionary logo"` with proper ARIA attributes  

4. Header search input control (Line 60)  
   - Issue: Input managed uncontrolled state  
   - Fix: Added `value={initialTerm}` and `onChange` handler  

5. Mobile keyboard optimization  
   - Issue: Mobile keyboards showed wrong layout  
   - Fix: Added `inputmode="text"` for proper keyboard display  

6. Profile image visibility  
   - Issue: Broken avatar image path  
   - Fix: Corrected path to `/profile.webp` with error handling  

7. Avatar accessibility (Line 71)
   - Issue: Missing alt text for AvatarImage  
   - Fix: Added `alt="User profile picture"`  

8. Avatar styling  (Line 70)
   - Issue: Used style={{ width: "32px", height: "32px"}}  
   - Fix: Replaced with `className="w-8 h-8"`  

9. Header style compliance (Line 42)
   - Issue: Colors mismatched Figma designs  
   - Fix: Updated to color and text  

### [Hero Component]

1. Component Naming (Line 79)  
   - Issue: "BoxArea97" didn't describe purpose  
   - Fix: Renamed to `Hero.jsx`  

2. HTML Semantics  
   - Issue: Used multiple nested `<div>` elements  
   - Fix: Implemented `<section>` with `aria-labelledby`  

3. SearchHero data flow (Line 80-90)  
   - Issue: Missing search callback prop  
   - Fix: Added `onSearchHero={(event) => ...}` handler  

4. Hero image alt (Line 96)  
   - Issue: `<img>` had empty alt  
   - Fix: Added `alt="Word dictionary background"`  

### [SearchHero Component]

1. Component naming  
   - Issue: "BoxArea108" was unclear  
   - Fix: Renamed to `SearchHero.jsx`  

2. Unnecessary useState  
   - Issue: Local state wasn't required  
   - Fix: Converted to controlled component via props  

3. Removed useEffect  
   - Issue: Side effect for input handling  
   - Fix: Moved logic to parent component  

4. Props typing (Line 124)  
   - Issue: Implicit `any` type for callback  
   - Fix: Added `(event: React.FormEvent<HTMLFormElement>)` type  

5. Form submission (Line 129)  
   - Issue: Missing form wrapper  
   - Fix: Added `<form onSubmit={onSearch}>`  

6. Semantic HTML (Line 128-146)  
   - Issue: Non-semantic markup  
   - Fix: Implemented proper `<form>` structure  

7. Submit button (Line 141)  
   - Issue: Button lacked type attribute  
   - Fix: Added `type="submit"`  

8. Style corrections (Line 132-145)  
   - Issue: Incorrect font sizes and spacing  
   - Fix: Matched Tailwind classes to design specs  

### [TagList Component]

1. Props typing (Line 150)  
   - Issue: Untyped component props  
   - Fix: Added `interface TagListProps`  

2. Semantic structure (Line 157-180)  
   - Issue: Used `<div>` for list items, title text and container 
   - Fix: Implemented `<ul>` + `<li>` with proper roles ,`<h1>` and `<section>` 

3. Debug returns  
   - Issue: Minimal return statements  
   - Fix: Added explicit returns for debugging if this is necesary 

4. Keyboard nav (Line 170)  
   - Issue: Tags not keyboard-focusable  
   - Fix: Added `tabIndex={0}` to badges  

5. ARIA labels  
   - Issue: Missing screen reader context  
   - Fix: Added `aria-label="Available tags"`  

### [Global Styles]

1. Color palette  
   - Issue: Hardcoded color values  
   - Fix: Defined Tailwind color variables  

2. Inter font  
   - Issue: Default system font  
   - Fix: Added `@import url('https://fonts.googleapis.com/css2?family=Inter')`  

3. Utils  
   - Issue: Selector container 
   - Fix: Add selector container to section  