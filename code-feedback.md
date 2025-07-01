# Code feedback

Så fik jeg mig endelig taget sammen til at kigge på din kode. 

Beklager det tog så lang tid.

## Typescript

Det først der springer mig i øjnene er, at der i repo'et lader til at være et mix af JS og TS. Der er heller ikke nogen tsconfig fil.

Man kan sagtens skrive god kode i ren JS - men hvis andre skal læse det og arbejde med det er det nemmere at bruge TS. 

Personligt synes jeg også det er nemmere at skrive TS, pga typerne.

## App.tsx

I [`App.tsx`](./src/App.tsx) er der mange `useState` til at holde styr på en meget simpel form. Når det er en enkelt form med begrænsede inputs er det OK. Men det ville nok være nemmere (også for dig selv) hvis du brugte et form framework a la [`react-hook-form`](https://react-hook-form.com) eller [`TanStack
Form`](https://tanstack.com/form/latest). Det smukke ved den slags løsninger er at du kan nøjes med få linjer kode, som gør det samme som 6 - 10 `useState`s - og de giver også mulighed for validering og fejlhåndtering (for eksempel med [zod](https://zod.dev)).

