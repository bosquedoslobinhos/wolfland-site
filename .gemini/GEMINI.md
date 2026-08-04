# WOLFLAND — Bosque dos Lobinhos · Site

Série animada infantil (estética pelúcia/feltro) para YouTube.
Stack: React 18 + Vite 5 · Supabase · Vercel · Resend · i18n PT/EN/ES

## Personagens
- **Ricky** `#C4935A` — lobo marrom, Vale dos Pinheiros, coragem
- **JP** `#3B6FA0` — lobo azul, Pico Nevado, soluções
- **Lila** `#c87dd4` — loba lilás, Jardim das Flores, gentileza
- **Rosie** `#D878B0` — loba rosa, Bosque das Estrelas, esperança

## Cores
```
bg: #0a0917 | texto: #f2ece4 | gold: #F5C542 | roxo: #a89fc8
```

## Fontes
Bigover (títulos) · Baloo 2 ExtraBold (taglines) · Nunito (corpo)

## Arquitetura
- `src/i18n/index.jsx` — `useLang()` → `{ t, lang, setLang }`
- `src/lib/supabase.js` — `getEpisodes()` + `subscribeNewsletter(email, idioma)`
- Supabase projeto: `pvnahcyndbftwawmufiw`
- Edge Function: `welcome-email` (Deno, dispara no INSERT de subscribers)

## Convenções
- CSS variables sempre, nunca hex direto nos componentes
- Textos sempre nas 3 línguas em `src/i18n/index.jsx`
- Nunca commitar `.env.local`
- `git config user.email "bosquedoslobinhos@gmail.com"`

Leia `CLAUDE.md` para documentação completa.
