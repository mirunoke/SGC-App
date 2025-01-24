import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: "INOCHEM SGC <no-reply@gigdemgalvan.com>",
    to: email,
    subject: "Tu código de seguridad está aquí",
    html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              color: #333;
              line-height: 1.6;
            }
            .container {
              max-width: 500px;
              margin: 40px auto;
              background: #fafafa;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
              text-align: center;
            }
            .logo {
              margin-bottom: 20px;
            }
            .code {
              font-size: 24px;
              color: #4caf50;
              font-weight: bold;
              background: #f1f1f1;
              border-radius: 8px;
              padding: 10px 20px;
              display: inline-block;
              margin: 20px 0;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #888;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <img src="https://i.imgur.com/KAogJ5H.png" alt="Logo" class="logo" width="200">
            <h1>Código de seguridad</h1>
            <p>Estimado usuario,</p>
            <p>Su código de autenticación de dos factores es:</p>
            <div class="code">${token}</div>
            <p>Si no solicitaste este código, ignora este mensaje.</p>
            <div class="footer">INOCHEM SGC</div>
          </div>
        </body>
      </html>
    `
  });
};



export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "INOCHEM SGC <no-reply@gigdemgalvan.com>",
    to: email,
    subject: "Confirma tu dirección de correo electrónico",
    html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              color: #333;
              line-height: 1.6;
            }
            .container {
              max-width: 500px;
              margin: 40px auto;
              background: #fafafa;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
              text-align: center;
            }
            .logo {
              margin-bottom: 20px;
            }
            .button {
              background-color: #4caf50;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #888;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <img src="https://i.imgur.com/KAogJ5H.png" alt="Logo" class="logo" width="200">
            <h1>Confirma tu correo</h1>
            <p>Estimado usuario,</p>
            <p>Para continuar, por favor confirma tu dirección de correo electrónico haciendo clic en el siguiente botón:</p>           
            <br>
            <a href="${confirmLink}" class="button">Confirmar</a>
            <br>
            <br>
            <p>Si no reconoces esta solicitud, por favor ignora este correo.</p>
            <div class="footer">INOCHEM SGC</div>
          </div>
        </body>
      </html>
    `
  });
};


export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "INOCHEM SGC <no-reply@gigdemgalvan.com>",
    to: email,
    subject: "¿Olvidaste tu contraseña?",
    html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              color: #333;
              line-height: 1.6;
            }
            .container {
              max-width: 500px;
              margin: 40px auto;
              background: #fafafa;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
              text-align: center;
            }
            .logo {
              margin-bottom: 20px;
            }
            .button {
              background-color: #4caf50;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #888;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <img src="https://i.imgur.com/KAogJ5H.png" alt="Logo" class="logo" width="200">
            <h1>Restablece tu contraseña</h1>
            <p>Estimado usuario,</p>
            <p>Haz clic en el siguiente botón para restablecer tu contraseña:</p>
            <br>
            <a href="${resetLink}" class="button">Restablecer</a>
            <br>
            <p>Si no solicitaste este cambio, ignora este correo.</p>
            <div class="footer">INOCHEM SGC</div>
          </div>
        </body>
      </html>
    `
  });
};
