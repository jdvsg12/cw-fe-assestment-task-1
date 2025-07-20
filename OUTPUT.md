## Changes Made

### [Component Home]

1.  Move app to folder pages
   - Issue: Current structure limits project scalability for new pages/sections.
   - Fix: Moved App to /pages folder to enable modular expansion.
   
2. Rename App to Home
   - Issue: App.jsx name doesn't clearly represent its role as the main page.
   - Fix: Renamed to Home.jsx to better reflect its purpose and follow naming conventions.

3. Replace static tags useState with VariantType dictionary in line 19
   - Issue: Unnecessary React state usage for static tag values, impacting performance and maintainability.
   - Fix: Replaced static tags useState with type-safe TagVariants and TAGS dictionary.

4. Controlled search state in Home in line 10 to 17
   - Issue: Missing state management in parent component (Home/App) for search input control.
   - Fix: Added state and handler in Home component to control the input.

### [Component Header]

1. Logo redirection line 43
   - Issue: Logo lacked navigation functionality.
   - Fix: Wrapped logo in <a> tag with href="/".

2. HTML semantic structure line 51
   - Issue: Text semantics, attributes, and structure were non-compliant.
   - Fix: Added <h1> tag to improve browser readability and accessibility.

3. Image accessibility line 44
   - Issue: Image missing alt attribute, causing failover issues.
   - Fix: Added descriptive alt text.

4. Header search input control line 60
   - Issue: Uncontrolled input without dedicated search button handler.
   - Fix: Converted to controlled input for dynamic search/filter implementation.

5. Mobile keyboard optimization
   - Issue: Missing inputmode for mobile keyboard type definition.
   - Fix: Added inputmode="text" for proper mobile UX.

6. Profile image visibility
   - Issue: Profile image failed to display.
   - Fix: Added valid profile image source.

7. Avatar accessibility
   - Issue: Missing alt description in Avatar component.
   - Fix: Added descriptive alt text.

8. Avatar styling
   - Issue: Inline styles in Avatar component.
   - Fix: Replaced with Tailwind CSS classes.

9. Styles in header
   - Issue: Styles in header are diferent to figma
   - Fix: Replace color in text and background, fix size in text

### [Component Hero]

1.  Component Naming line 79
   - Issue: Non-descriptive component name (BoxArea97) reduced code clarity.
   - Fix: Renamed to Hero to accurately reflect component purpose.

2.  HTML Semantics.
   - Issue: Excessive generic div usage impaired accessibility and SEO.
   - Fix: Replaced divs with semantic tags

3.  Data of SearchHero line 80 to 90.
   - Issue: Crear una funcion que tome la data del componente searchHero.
   - Fix: Se creo una funcion onSearchHero para tomar la data del componente SerachHero

4.  Tag HTML sin atributo linea 96.
   - Issue: la imagen del hero no tiene alt.
   - Fix: Se agrego el atributo alt que describe la imagen del hero

### [Component SearchHero]

1.  UseEffect sin uso
   - Issue: Para trabajar el estado del input no es necesario el useEffect.
   - Fix: Se elimina el useEffect y se agrega un estado en componente padre para manejar el estado del input.
