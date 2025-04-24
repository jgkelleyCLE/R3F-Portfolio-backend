import nodemailer from 'nodemailer'

export const sendContact = async(req, res) => {

    const { name, email, phone, message, busName, busCity, busState, busZip, busType, busYears, fedId, landName, landNumber, landYears, landFootage } = req.body

   

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
        <h4>Email: ${email}</h4>
        <h4>Phone: ${phone}</h4>

        <h4>Business Name: ${busName}</h4>
        <h4>Location: ${busCity}, ${busState} ${busZip}</h4>
        <h4>Business Type: ${busType}</h4>
        <h4>Years in Business: ${busYears}</h4>
        <h4>Federal ID: ${fedId}</h4>

        <h4>Previous Landlord Name: ${landName}</h4>
        <h4>Previous Landlord Number: ${landNumber}</h4>
        <h4>Years at Property: ${landYears}</h4>
        <h4>Square Footage of Property: ${landFootage}</h4>
        
        <h4>Comments: ${message}</h4>

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