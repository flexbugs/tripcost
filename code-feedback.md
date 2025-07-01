# Code feedback

Så fik jeg mig endelig taget sammen til at kigge på din kode. 

Beklager det tog så lang tid.

## Styrker

Lad os starte med det positive

1. God struktur og organisering. Der er klar `separation of concerns` i opdelingen af filer.

2. Moderne tooling med vite, eslint v9, og React v19

3. Konsistent navngivning

4. Component composition: Separation between presentation and logic

5. Konsistent brug af MUI

6. Loading states og håndtering af fejl fra API - Nice UX 

7. Dark theme - Altid nice


## Svagheder / Plads til forbedring

1. Inkonsistente typescript-typer

```typescript
// FieldCustomFuelPrice.tsx - ingen typescript props
export default function FieldCustomFuelPrice({
    formData,
    onInputChange,
    validationErrors,
}) {
```

miks af typer. Skaber forvirring.
```typescript
TPrice = string | number
```

2. Code duplication.
  - TextField er det samme pattern over flere components
  - Validering: Formvalidering kunne laves til en custom hook (eller brug et dedikeret form tool til det - f.eks. [TanStack Form](https://tanstack.com/form/latest) eller [React Hook Form](https://react-hook-form.com))
  - Input field: Numerisk input konfiguration bliver gentaget

3. `useEffect` mangler en dependency i [`App.tsx`](./src/App.tsx), hvilket potentielt kan føre til infinite re-renders
```typescript
useEffect(() => {
    // ...logic...
}, [selectedFuelType, fuelData]); // mangler formData dependency
```  

4. Configuration
  - Eslint er kun konfigureret til `.js` og `.jsx` filer - mangler `.ts` og `.tsx`


## Yderligere forbedringer
1. Overvej accessibility.
  - tilføj ARIA labels (hvis ikke MUI allerede gør)
  - Keyboard navigation
  - Flyt Focus til fejlramte inputs

2. Brug [error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

3. Skriv bedre fejlbeskeder

4. Overvej at lave et monorepo hvor både frontend og backend koden lever.

## Afsluttende bemærkninger

Din kode er god og letlæselig. Der er taget højde for UX. Der hvor der er brug for forbedring er konsistens i brugen af TypeScript.