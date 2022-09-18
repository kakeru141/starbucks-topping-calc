import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {  
    if(req.method === 'POST') {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SG_KEY); 
       
      const clientMsg = {
        to: req.body.email,
        from: 'support@example.com',
        subject: `お問合せありがとうございます。${req.body.name}様`,
        text: `
        お問合せを受け付けました。回答をお待ちください。${req.body.msg}
        `,
      };

      const managerMsg = {
        to: 'sendokakeru.js@gmail.com',
        from: req.body.email,
        subject: 'スタバのトッピング計算　よりお問い合わせ',
        text: `
        name:${req.body.name}
        email:${req.body.email}
        msg:${req.body.msg}
        `
      };
   
      (async () => {
        try {
          await sgMail.send(clientMsg);
          await sgMail.send(managerMsg)
        } catch (error) {
          console.error(error);
        }
      })();
    }
   
    res.status(200)
}