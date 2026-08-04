# WOLFLAND — Bosque dos Lobinhos · Landing Page

Site oficial em React/Vite. Leia este arquivo antes de qualquer mudança.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + Vite 5 |
| Deploy | Vercel (auto-deploy do branch `main`) |
| Domínio | bosquedoslobinhos.com.br |
| Repo | github.com/bosquedoslobinhos/wolfland-site |
| Banco | Supabase — projeto `pvnahcyndbftwawmufiw` |
| Email | Resend (domínio: bosquedoslobinhos.com.br, from: ola@bosquedoslobinhos.com.br) |
| i18n | React Context (`src/i18n/index.jsx`) — PT 🇧🇷 / EN 🇺🇸 / ES 🇪🇸 |

---

## Comandos

```bash
cd landing_page
npm install          # instalar dependências
npm run dev          # dev server em localhost:5173
npm run build        # build de produção (pasta dist/)
npm run preview      # preview do build
```

Deploy: automático via Vercel ao fazer `git push origin main`.

---

## Estrutura

```
landing_page/
├── public/
│   ├── fonts/          # Bigover.ttf, Baloo2-ExtraBold.ttf, Nunito-Variable.ttf
│   └── img/
│       ├── logo.png
│       ├── ricky.jpeg / jp.jpeg / lila.jpeg / rosie.jpeg
│       ├── arvore-da-amizade.png
│       ├── mapa.png
│       └── cenarios/   # ricky-panorama / jp-panorama / lila-panorama / rosie-panorama
├── src/
│   ├── components/     # um arquivo por seção
│   ├── data/
│   │   └── characters.js   # dados completos dos 4 personagens
│   ├── i18n/
│   │   └── index.jsx       # useLang() hook — { t, lang, setLang }
│   ├── lib/
│   │   └── supabase.js     # cliente Supabase + getEpisodes() + subscribeNewsletter()
│   └── App.jsx
└── supabase/
    └── functions/
        └── welcome-email/
            └── index.ts    # Edge Function Deno — email boas-vindas
```

---

## Componentes

| Componente | Seção | Notas |
|------------|-------|-------|
| `Navbar` | Topo | Fixo, hide-on-scroll, seletor PT/EN/ES |
| `Hero` | Hero | Árvore da Amizade, parallax, bubbles dos personagens |
| `About` | Sobre | Stats: 4 personagens, 4 mundos, ∞ aventuras |
| `WorldMap` | Mapa | Mapa interativo com pins por mundo |
| `Characters` | Personagens | Grid + modal de detalhes |
| `Videos` | Vídeos | Busca episódios do Supabase; fallback com placeholders |
| `Social` | Redes | Cards YouTube / Instagram / TikTok |
| `Newsletter` | Newsletter | Salva email + idioma no Supabase → webhook → email boas-vindas |
| `Footer` | Rodapé | Logo + personagens + copyright |
| `MusicPlayer` | Flutuante | Modo teaser (AUDIO_SRC = null por enquanto) |
| `CookieBanner` | LGPD | 3 idiomas, salva em localStorage |
| `Stars` | Global | Estrelas + vaga-lumes animados no fundo |

---

## Supabase

**Tabelas:**

`episodes`
```sql
id, temporada, numero, titulo, titulo_en, titulo_es,
youtube_id, thumbnail_url, status ('rascunho'|'publicado'), created_at
```

`subscribers`
```sql
id, email (unique), idioma ('pt'|'en'|'es'), created_at
```

**RLS ativo** — grants necessários:
```sql
GRANT SELECT ON public.episodes TO anon;
GRANT INSERT ON public.subscribers TO anon;
```

**Webhook:** `on-new-subscriber` → INSERT em `subscribers` → dispara Edge Function `welcome-email`

**Env vars locais** (nunca commitar):
```
VITE_SUPABASE_URL=https://pvnahcyndbftwawmufiw.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key pública>
```

**Env vars no Vercel:** as mesmas acima, configuradas no dashboard da Vercel.

---

## Brand System

### Paleta de cores
```css
--bg-deep:   #0a0917   /* navy profundo — background principal */
--bg-mid:    #10102a
--bg-light:  #181838
--text-main: #f2ece4   /* creme quente */
--text-muted:#a89fc8   /* roxo acinzentado */
--gold:      #F5C542   /* dourado — CTA, títulos de destaque */
--purple:    #7c5cbf   /* roxo acento */
```

### Fontes (arquivos em `public/fonts/`)
| Fonte | Arquivo | Uso |
|-------|---------|-----|
| **Bigover** | `Bigover.ttf` | Títulos de seção, nomes de personagens |
| **Baloo 2 ExtraBold** | `Baloo2-ExtraBold.ttf` | Taglines, headings secundários |
| **Nunito** | `Nunito-Variable.ttf` | Corpo, labels, tudo mais |

### Personagens
| Nome | Cor | Mundo | Valor |
|------|-----|-------|-------|
| **Ricky** | `#C4935A` | Vale dos Pinheiros 🌲 | Coragem e liderança |
| **JP** | `#3B6FA0` | Pico Nevado ❄️ | Soluções e persistência |
| **Lila** | `#c87dd4` | Jardim das Flores 🌸 | Gentileza e equilíbrio |
| **Rosie** | `#D878B0` | Bosque das Estrelas ⭐ | Esperança e encantamento |

Centro do universo: **Árvore da Amizade** (ponto de encontro dos 4).

### Tom de voz
- Caloroso, mágico, infantil mas não infantilizado
- Emojis com moderação (🐾 🌳 🐺 ✨)
- Sempre trilíngue quando for conteúdo do site

---

## i18n

```jsx
import { useLang } from '../i18n'
const { t, lang, setLang } = useLang()
// t.navbar.* | t.hero.* | t.about.* | t.videos.* | t.newsletter.* | etc.
// lang = 'pt' | 'en' | 'es'
```

Ao adicionar texto novo: sempre adicionar nas 3 línguas em `src/i18n/index.jsx`.

---

## Convenções

- **CSS:** variáveis CSS (`var(--gold)`) em vez de hex direto nos componentes
- **Imagens:** sempre de `public/img/` — referenciadas como `/img/logo.png`
- **Secrets:** nunca commitar `.env.local`; usar `.env.example` sem valores reais
- **Commits:** `feat:`, `fix:`, `chore:` — mensagem em inglês ou português, sem emoji no commit
- **Git user:** `git config user.email "bosquedoslobinhos@gmail.com"`
- **Branch:** trabalhar em `main` (projeto pequeno, sem PRs por enquanto)

---

## Pendências conhecidas

- [ ] Página `/privacidade` (referenciada no CookieBanner)
- [ ] MusicPlayer — conectar `trilha_introducao.mp3` quando aprovada
- [ ] Episodes — trocar placeholders por YouTube IDs reais quando episódios forem ao ar
- [ ] Pipeline ↔ site: quando episódio publicado no pipeline → INSERT em `episodes` → Vercel rebuild
