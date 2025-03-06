import nodemailer from 'nodemailer'

export const sendMail = async(req, res) => {

    const { name, email, message, path } = req.body

    const sendLocation = path === '/' ? "Modal" : path === '/contact' ? "Contact Page" : "Other"

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'partysafariohio@gmail.com',
          pass: process.env.GMAIL_PASSWORD
        }
      });

      let mailOptions = {
        from: 'R3F Portfolio <partysafariohio@gmail.com>',
        to: `john.gerard.kelley@gmail.com`,
        subject: `Portfolio Contact Form - ${name}`,
        html: `
        <html>

          <body>
      <div class="flex-container-center">
      
      </div>
        
        <h3>New message from R3F Portfolio!</h3>
        <h4>Name: ${name}</h4>
        <h4>From: ${email}</h4>
        <h4>Sent from: ${sendLocation}</h4>
        <h4>Message: ${message}</h4>

      </body>
         
          
        </html>
      `,
      };

      let info = await transporter.sendMail(mailOptions);

        // res.send('Email sent: ' + info.response);
        res.json({ 
          message: "Email sent successfully", 
          details: "250 2.0.0 OK..." 
        });

}