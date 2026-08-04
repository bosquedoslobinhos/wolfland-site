# GitHub Copilot — WOLFLAND Site

## Projeto
Site oficial da série infantil WOLFLAND — Bosque dos Lobinhos.
React 18 + Vite 5 · Supabase · Vercel · i18n PT/EN/ES.

## Regras obrigatórias

1. **i18n sempre**: qualquer texto visível precisa estar em `src/i18n/index.jsx` nas 3 línguas (pt/en/es) e acessado via `useLang()`.
2. **CSS variables**: use `var(--gold)`, `var(--bg-deep)` etc. em vez de hex direto.
3. **Sem secrets**: nunca colocar keys no código — usar `import.meta.env.VITE_*`.
4. **Supabase**: operações de leitura/escrita em `src/lib/supabase.js`, nunca direto nos componentes.

## Brand
```
Cores: bg #0a0917 · texto #f2ece4 · gold #F5C542 · roxo #a89fc8
Fontes: Bigover (títulos) · Baloo2 (taglines) · Nunito (corpo)
Personagens: Ricky #C4935A · JP #3B6FA0 · Lila #c87dd4 · Rosie #D878B0
```

## Tom de voz
Caloroso, mágico, infantil mas não infantilizado. Emojis com moderação.

## Supabase schema
- `episodes`: id, temporada, numero, titulo, titulo_en, titulo_es, youtube_id, status
- `subscribers`: id, email (unique), idioma, created_at
