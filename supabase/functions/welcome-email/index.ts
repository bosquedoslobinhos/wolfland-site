import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const FROM = 'Bosque dos Lobinhos <ola@bosquedoslobinhos.com.br>'
const BASE = 'https://bosquedoslobinhos.com.br'

// ── Email template ────────────────────────────────────────────────────────────
function buildEmail(headline: string, body: string, cta: string): string {
  return `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <title>${headline}</title>
</head>
<body style="margin:0;padding:0;background:#110d22;font-family:'Nunito',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
    style="background:#110d22;min-height:100vh;">
    <tr>
      <td align="center" style="padding:32px 16px 48px;">

        <!-- ── CARD ── -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation"
          style="max-width:600px;width:100%;border-radius:24px;overflow:hidden;
                 background:#0a0917;box-shadow:0 24px 80px rgba(0,0,0,0.7);">

          <!-- HEADER: logo -->
          <tr>
            <td align="center"
              style="background:linear-gradient(180deg,#160d2e 0%,#0a0917 100%);
                     padding:36px 40px 28px;border-bottom:2px solid #2a1a4a;">
              <img src="${BASE}/img/logo.png" alt="WOLFLAND — Bosque dos Lobinhos"
                width="200" style="display:block;max-width:200px;" />
            </td>
          </tr>

          <!-- HERO: panorama -->
          <tr>
            <td style="padding:0;margin:0;line-height:0;font-size:0;">
              <img src="${BASE}/img/cenarios/ricky-panorama.png"
                alt="Bosque dos Lobinhos" width="600"
                style="display:block;width:100%;max-height:210px;
                       object-fit:cover;object-position:center 30%;" />
            </td>
          </tr>

          <!-- PAWS DIVIDER -->
          <tr>
            <td align="center"
              style="background:linear-gradient(90deg,#e8a820,#F5C542,#e8a820);
                     padding:10px 0;font-size:20px;letter-spacing:8px;color:#1a0e00;">
              🐾 🐾 🐾
            </td>
          </tr>

          <!-- HEADLINE + BODY -->
          <tr>
            <td align="center" style="padding:44px 48px 16px;">
              <h1 style="margin:0 0 20px;
                         color:#F5C542;
                         font-family:'Nunito',Arial,sans-serif;
                         font-size:34px;font-weight:900;line-height:1.2;">
                ${headline}
              </h1>
              <p style="margin:0;color:#f2ece4;
                        font-family:'Nunito',Arial,sans-serif;
                        font-size:16px;line-height:1.8;">
                ${body}
              </p>
            </td>
          </tr>

          <!-- CHARACTERS ROW -->
          <tr>
            <td style="padding:36px 32px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                <tr>

                  <!-- Ricky -->
                  <td align="center" width="25%" style="padding:0 4px;">
                    <img src="${BASE}/img/ricky.jpeg" alt="Ricky"
                      width="96" height="96"
                      style="display:block;border-radius:50%;
                             border:4px solid #C4935A;
                             object-fit:cover;margin:0 auto;" />
                    <p style="margin:8px 0 0;color:#C4935A;
                              font-family:'Nunito',Arial,sans-serif;
                              font-size:11px;font-weight:800;
                              text-transform:uppercase;letter-spacing:1px;">Ricky</p>
                  </td>

                  <!-- JP -->
                  <td align="center" width="25%" style="padding:0 4px;">
                    <img src="${BASE}/img/jp.jpeg" alt="JP"
                      width="96" height="96"
                      style="display:block;border-radius:50%;
                             border:4px solid #3B6FA0;
                             object-fit:cover;margin:0 auto;" />
                    <p style="margin:8px 0 0;color:#3B6FA0;
                              font-family:'Nunito',Arial,sans-serif;
                              font-size:11px;font-weight:800;
                              text-transform:uppercase;letter-spacing:1px;">JP</p>
                  </td>

                  <!-- Lila -->
                  <td align="center" width="25%" style="padding:0 4px;">
                    <img src="${BASE}/img/lila.jpeg" alt="Lila"
                      width="96" height="96"
                      style="display:block;border-radius:50%;
                             border:4px solid #c87dd4;
                             object-fit:cover;margin:0 auto;" />
                    <p style="margin:8px 0 0;color:#c87dd4;
                              font-family:'Nunito',Arial,sans-serif;
                              font-size:11px;font-weight:800;
                              text-transform:uppercase;letter-spacing:1px;">Lila</p>
                  </td>

                  <!-- Rosie -->
                  <td align="center" width="25%" style="padding:0 4px;">
                    <img src="${BASE}/img/rosie.jpeg" alt="Rosie"
                      width="96" height="96"
                      style="display:block;border-radius:50%;
                             border:4px solid #D878B0;
                             object-fit:cover;margin:0 auto;" />
                    <p style="margin:8px 0 0;color:#D878B0;
                              font-family:'Nunito',Arial,sans-serif;
                              font-size:11px;font-weight:800;
                              text-transform:uppercase;letter-spacing:1px;">Rosie</p>
                  </td>

                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA BUTTON -->
          <tr>
            <td align="center" style="padding:36px 40px 44px;">
              <a href="${BASE}"
                style="display:inline-block;
                       background:linear-gradient(135deg,#F5C542,#e8a820);
                       color:#1a0e00;padding:18px 48px;border-radius:50px;
                       text-decoration:none;font-weight:900;font-size:17px;
                       font-family:'Nunito',Arial,sans-serif;
                       box-shadow:0 6px 24px rgba(245,197,66,0.45);
                       letter-spacing:0.3px;">
                ${cta} 🌳
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center"
              style="background:#060310;padding:20px 40px;
                     border-top:1px solid #2a1a4a;">
              <p style="margin:0;color:#7a6e9a;font-size:11px;
                        font-family:'Nunito',Arial,sans-serif;line-height:1.6;">
                WOLFLAND — Bosque dos Lobinhos<br/>
                <a href="${BASE}" style="color:#F5C542;text-decoration:none;">
                  bosquedoslobinhos.com.br
                </a>
              </p>
            </td>
          </tr>

        </table>
        <!-- ── /CARD ── -->

      </td>
    </tr>
  </table>

</body>
</html>`
}

// ── Content per language ──────────────────────────────────────────────────────
const content: Record<string, { subject: string; headline: string; body: string; cta: string }> = {
  pt: {
    subject:  '🐾 Bem-vindo ao Bosque dos Lobinhos!',
    headline: 'Você está na lista! 🎉',
    body:     'Olá! Você acabou de entrar na lista VIP do <strong>Bosque dos Lobinhos</strong>.<br/>Vamos te avisar em primeira mão quando o primeiro episódio chegar! 🐺✨',
    cta:      'Visitar o Bosque',
  },
  en: {
    subject:  '🐾 Welcome to Wolfland Forest!',
    headline: "You're on the list! 🎉",
    body:     'Hello! You just joined the VIP list for <strong>Wolfland Forest</strong>.<br/>We\'ll let you know first when the first episode drops! 🐺✨',
    cta:      'Visit the Forest',
  },
  es: {
    subject:  '🐾 ¡Bienvenido al Bosque de los Lobitos!',
    headline: '¡Estás en la lista! 🎉',
    body:     '¡Hola! Acabas de unirte a la lista VIP del <strong>Bosque de los Lobitos</strong>.<br/>¡Te avisaremos primero cuando llegue el primer episodio! 🐺✨',
    cta:      'Visitar el Bosque',
  },
}

// ── Handler ───────────────────────────────────────────────────────────────────
serve(async (req) => {
  try {
    const { record } = await req.json()
    const email  = record?.email
    const idioma = (record?.idioma ?? 'pt') as string
    const lang   = content[idioma] ? idioma : 'pt'

    if (!email) return new Response('no email', { status: 400 })

    const { subject, headline, body, cta } = content[lang]

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to:   email,
        subject,
        html: buildEmail(headline, body, cta),
      }),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), { status: res.status })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 })
  }
})
