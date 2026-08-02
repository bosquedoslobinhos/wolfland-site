import { createContext, useContext, useState } from 'react'

// ─── Translations ────────────────────────────────────────────
export const translations = {
  pt: {
    lang: 'pt',
    flag: '🇧🇷',
    label: 'Português',
    nav: {
      sobre: 'Sobre',
      personagens: 'Personagens',
      episodios: 'Episódios',
      mapa: 'Os Mundos',
      seguir: 'Seguir 🐾',
    },
    hero: {
      tagline: 'Um lugar mágico cheio de',
      adventure: 'aventura',
      friendship: 'amizade',
      discoveries: 'descobertas',
      sub: 'Série animada infantil · Em breve no YouTube',
      cta1: '▶ Seguir no YouTube',
      cta2: 'Conhecer os Personagens',
      countdown: 'Primeiro episódio em:',
    },
    about: {
      title: 'O Bosque dos Lobinhos',
      text: 'WOLFLAND é uma série animada infantil sobre quatro lobinhos de pelúcia que exploram um bosque mágico cheio de aventuras, amizades e lições de vida. Cada lobinho vive em um lugar único — do pico nevado à floresta estrelada — e juntos descobrem que a diversidade é o que torna o bosque tão especial.',
      stat1: 'Personagens',
      stat2: 'Mundos Únicos',
      stat3: 'Aventuras',
      stat4: 'Bosque Mágico',
    },
    map: {
      title: 'Os Mundos do WOLFLAND',
      sub: 'Quatro mundos únicos, uma aventura sem fim. Clique em cada mundo para explorar!',
      worlds: [
        { id: 'ricky', name: 'Vale dos Pinheiros', emoji: '🌲', desc: 'O lar de Ricky, cheio de trilhas, pinheiros gigantes e aventuras inesperadas.' },
        { id: 'jp',    name: 'Pico Nevado',          emoji: '❄️', desc: 'A montanha nevada de JP, onde o iglu é sempre quentinho por dentro.' },
        { id: 'lila',  name: 'Jardim das Flores',    emoji: '🌸', desc: 'O jardim colorido de Lila, com flores que contam histórias e borboletas mágicas.' },
        { id: 'rosie', name: 'Bosque das Estrelas',  emoji: '⭐', desc: 'O bosque encantado de Rosie, onde as estrelas brilham mesmo de dia.' },
      ],
    },
    characters: {
      title: 'Conheça os Lobinhos',
      sub: 'Cada um tem sua personalidade única — clique em um lobinho para conhecê-lo melhor!',
      verMais: 'Ver mais →',
      modal: {
        habilidade: '✨ Habilidade',
        personalidade: '💫 Personalidade',
        episodio: '🎬 Episódio',
      },
    },
    videos: {
      title: 'Episódios',
      sub: 'Em breve no YouTube — veja o que vem por aí!',
      comingSoon: 'Em breve',
    },
    social: {
      title: 'Nos Siga!',
      sub: 'Fique por dentro de tudo que acontece no Bosque dos Lobinhos.',
      socials: [
        { platform: 'YouTube',   cta: 'Seguir no YouTube',   desc: 'Novos episódios toda semana! Não perca nenhuma aventura.' },
        { platform: 'Instagram', cta: 'Seguir no Instagram',  desc: 'Bastidores, artes exclusivas e novidades direto do bosque!' },
        { platform: 'TikTok',   cta: 'Seguir no TikTok',    desc: 'Clipes divertidos, memes e momentos mágicos dos lobinhos!' },
      ],
    },
    newsletter: {
      title: 'Não perca nada!',
      sub: 'Entre na lista VIP e seja o primeiro a saber quando o bosque ganhar vida!',
      hint: 'Sem spam — só aventuras 🌟',
      placeholder: 'seu@email.com',
      cta: 'Entrar na lista 🐾',
      success: 'Uau! Você está na lista! Até logo no bosque!',
      error: 'Hmm, esse e-mail parece inválido. Tente de novo!',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
    cookies: {
      text: 'Usamos cookies para melhorar a experiência deste site. Ao continuar, você concorda com nossa',
      policy: 'política de privacidade',
      cta: 'Continuar',
    },
  },

  en: {
    lang: 'en',
    flag: '🇺🇸',
    label: 'English',
    nav: {
      sobre: 'About',
      personagens: 'Characters',
      episodios: 'Episodes',
      mapa: 'The Worlds',
      seguir: 'Follow 🐾',
    },
    hero: {
      tagline: 'A magical place full of',
      adventure: 'adventure',
      friendship: 'friendship',
      discoveries: 'discoveries',
      sub: "Children's animated series · Coming soon to YouTube",
      cta1: '▶ Follow on YouTube',
      cta2: 'Meet the Characters',
      countdown: 'First episode in:',
    },
    about: {
      title: 'The Wolf Pup Forest',
      text: 'WOLFLAND is a children\'s animated series about four plush wolf pups who explore a magical forest full of adventures, friendships and life lessons. Each wolf pup lives in a unique place — from the snowy peak to the star-filled forest — and together they discover that diversity is what makes the forest so special.',
      stat1: 'Characters',
      stat2: 'Unique Worlds',
      stat3: 'Adventures',
      stat4: 'Magic Forest',
    },
    map: {
      title: "WOLFLAND's Worlds",
      sub: 'Four unique worlds, one endless adventure. Click on each world to explore!',
      worlds: [
        { id: 'ricky', name: 'Pine Valley',    emoji: '🌲', desc: "Ricky's home, full of trails, giant pines and unexpected adventures." },
        { id: 'jp',    name: 'Snowy Peak',     emoji: '❄️', desc: "JP's snowy mountain, where the igloo is always warm inside." },
        { id: 'lila',  name: 'Flower Garden',  emoji: '🌸', desc: "Lila's colorful garden, with story-telling flowers and magical butterflies." },
        { id: 'rosie', name: 'Star Forest',    emoji: '⭐', desc: "Rosie's enchanted forest, where stars shine even during the day." },
      ],
    },
    characters: {
      title: 'Meet the Wolf Pups',
      sub: 'Each one has a unique personality — click on a wolf pup to learn more!',
      verMais: 'Learn more →',
      modal: {
        habilidade: '✨ Skill',
        personalidade: '💫 Personality',
        episodio: '🎬 Episode',
      },
    },
    videos: {
      title: 'Episodes',
      sub: 'Coming soon to YouTube — see what\'s ahead!',
      comingSoon: 'Coming soon',
    },
    social: {
      title: 'Follow Us!',
      sub: 'Stay up to date with everything happening in Wolfland Forest.',
      socials: [
        { platform: 'YouTube',   cta: 'Follow on YouTube',   desc: "New episodes every week! Don't miss any adventure." },
        { platform: 'Instagram', cta: 'Follow on Instagram',  desc: 'Behind the scenes, exclusive art and news straight from the forest!' },
        { platform: 'TikTok',   cta: 'Follow on TikTok',    desc: 'Fun clips, memes and magical wolf pup moments!' },
      ],
    },
    newsletter: {
      title: "Don't miss out!",
      sub: 'Join the VIP list and be the first to know when the forest comes to life!',
      hint: 'No spam — just adventures 🌟',
      placeholder: 'your@email.com',
      cta: 'Join the list 🐾',
      success: "Wow! You're on the list! See you in the forest!",
      error: "Hmm, that email doesn't look right. Try again!",
    },
    footer: {
      rights: 'All rights reserved.',
    },
    cookies: {
      text: 'We use cookies to improve your experience on this site. By continuing, you agree to our',
      policy: 'privacy policy',
      cta: 'Continue',
    },
  },

  es: {
    lang: 'es',
    flag: '🇪🇸',
    label: 'Español',
    nav: {
      sobre: 'Sobre',
      personagens: 'Personajes',
      episodios: 'Episodios',
      mapa: 'Los Mundos',
      seguir: 'Seguir 🐾',
    },
    hero: {
      tagline: 'Un lugar mágico lleno de',
      adventure: 'aventura',
      friendship: 'amistad',
      discoveries: 'descubrimientos',
      sub: 'Serie animada infantil · Próximamente en YouTube',
      cta1: '▶ Seguir en YouTube',
      cta2: 'Conocer los Personajes',
      countdown: 'Primer episodio en:',
    },
    about: {
      title: 'El Bosque de los Lobitos',
      text: 'WOLFLAND es una serie animada infantil sobre cuatro lobitos de peluche que exploran un bosque mágico lleno de aventuras, amistades y lecciones de vida. Cada lobito vive en un lugar único — desde el pico nevado hasta el bosque estrellado — y juntos descubren que la diversidad es lo que hace al bosque tan especial.',
      stat1: 'Personajes',
      stat2: 'Mundos Únicos',
      stat3: 'Aventuras',
      stat4: 'Bosque Mágico',
    },
    map: {
      title: 'Los Mundos de WOLFLAND',
      sub: '¡Cuatro mundos únicos, una aventura sin fin! ¡Haz clic en cada mundo para explorar!',
      worlds: [
        { id: 'ricky', name: 'Valle de los Pinos',    emoji: '🌲', desc: 'El hogar de Ricky, lleno de senderos, pinos gigantes y aventuras inesperadas.' },
        { id: 'jp',    name: 'Pico Nevado',         emoji: '❄️', desc: 'La montaña nevada de JP, donde el iglú siempre es cálido por dentro.' },
        { id: 'lila',  name: 'Jardín de las Flores',emoji: '🌸', desc: 'El jardín colorido de Lila, con flores que cuentan historias y mariposas mágicas.' },
        { id: 'rosie', name: 'Bosque de las Estrellas', emoji: '⭐', desc: 'El bosque encantado de Rosie, donde las estrellas brillan incluso de día.' },
      ],
    },
    characters: {
      title: 'Conoce los Lobitos',
      sub: '¡Cada uno tiene su personalidad única — haz clic en un lobito para conocerlo mejor!',
      verMais: 'Ver más →',
      modal: {
        habilidade: '✨ Habilidad',
        personalidade: '💫 Personalidad',
        episodio: '🎬 Episodio',
      },
    },
    videos: {
      title: 'Episodios',
      sub: '¡Próximamente en YouTube — mira lo que viene!',
      comingSoon: 'Próximamente',
    },
    social: {
      title: '¡Síguenos!',
      sub: 'Entérate de todo lo que pasa en el Bosque de los Lobitos.',
      socials: [
        { platform: 'YouTube',   cta: 'Seguir en YouTube',   desc: '¡Nuevos episodios cada semana! ¡No te pierdas ninguna aventura!' },
        { platform: 'Instagram', cta: 'Seguir en Instagram',  desc: '¡Detrás de cámaras, arte exclusivo y novedades directo del bosque!' },
        { platform: 'TikTok',   cta: 'Seguir en TikTok',    desc: '¡Clips divertidos, memes y momentos mágicos de los lobitos!' },
      ],
    },
    newsletter: {
      title: '¡No te pierdas nada!',
      sub: '¡Únete a la lista VIP y sé el primero en saber cuando el bosque cobre vida!',
      hint: 'Sin spam — solo aventuras 🌟',
      placeholder: 'tu@email.com',
      cta: 'Unirse a la lista 🐾',
      success: '¡Genial! ¡Estás en la lista! ¡Hasta pronto en el bosque!',
      error: 'Hmm, ese correo no parece válido. ¡Intenta de nuevo!',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    cookies: {
      text: 'Usamos cookies para mejorar tu experiencia en este sitio. Al continuar, aceptas nuestra',
      policy: 'política de privacidad',
      cta: 'Continuar',
    },
  },
}

// ─── Context ─────────────────────────────────────────────────
const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const t = translations[lang]
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
