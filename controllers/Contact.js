import nodemailer from 'nodemailer'

export const sendContact = async(req, res) => {

    const { name, email, message } = req.body

   

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'partysafariohio@gmail.com',
          pass: process.env.GMAIL_PASSWORD
        }
      });

      let mailOptions = {
        from: '21600 Miles Road <partysafariohio@gmail.com>',
        to: `john.gerard.kelley@gmail.com`,
        subject: `21600 Miles Road Contact Form - ${name}`,
        html: `
        <html>

          <body>
      <div class="flex-container-center">
      
      </div>
        
        <h3>New message from 21600 Miles Road.</h3>
        <h4>Name: ${name}</h4>
        <h4>From: ${email}</h4>
        
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