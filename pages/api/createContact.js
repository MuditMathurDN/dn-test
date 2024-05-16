// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	let { name, organisation, emailId, messsage } = req.body
	//
	const response = await fetch(process.env.GRAPHCMS_PROJECT_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.GRAPHCMD_MUT_DATA_TOKEN}`,
		},
		body: JSON.stringify({
			query: `mutation {
        createContact(data : {name : "${name}",seen_status:"UNREAD" , emailId : "${emailId}" , organisation : "${organisation}" , message : "${messsage}"}){
          id
          name
          emailId
          message
        }
      }`,
			variables: {},
		}),
	})




	let data = await response.json()
	res.json(data);


	// ---- Lets send email to user
	let result = await sendAckNowledgementEmail(name, emailId);
	// ---- Email Sent

	//console.log(data);
	return;

}


export const sendAckNowledgementEmail = async (name, email) => {
	try {
		const email_body = ` <div style="width: 35vw; margin:auto; min-width: 320px;">
        <div style="text-align: center">
            <a href="https://dataneuron.ai/">
                <img width="100%" src="https://res.cloudinary.com/dataneuron/image/upload/v1661163337/header_u3vr0o.png"
                    alt="dataneuron logo" />
            </a>
        </div>
        <br />
        <div style="padding-left: 0.5vw; padding-right:0.5vw">
            <p>
                Hi <b>${name}</b>,
                <br />
                <br />
                Thank you for contacting us.
                <br />
                <br />
                We have received your query provided via the contact section of our website, our team will contact
                you as soon
                as possible.

                <br />
                <br />
                Average response time on working days: 1 hour
                <br />
                <br />
                <b>Do not reply in this thread as this is an auto generated email</b>.


                <br />
                For any assistance,
                please contact support@dataneuron.ai
                <br />
                <br />
                Thanks,
                <br />
                The DataNeuron Team
            </p>
        </div>
        <br />
        <div style="text-align:center;">
            <img width="100%" src="https://res.cloudinary.com/dataneuron/image/upload/v1661163336/footer_jotk6x.png"
                alt="dataneuron logo" />
        </div>
    </div>`

		console.log("Sending email to ", email);
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: true,
			host: "smtp.gmail.com",
			port: 465,
			auth: {
				type:'login',
				user: process.env.EMAIL_USERNAME,
				pass:process.env.EMAIL_PASSWORD
				// clientId: process.env.CLIENT_ID,
				// clientSecret: process.env.CLIENT_SECRET,
				// refreshToken: process.env.REFRESH_TOKEN,
				// accessToken: process.env.ACCESS_TOKEN
			}
		});


		let mailConfigurations = {
			from: '"DataNeuron Support" no-reply@dataneuron.ai',
			to: email,
			subject: "Thank you for contacting us",
			text: "We have received your message",
			html: email_body,
		};

		// let emailFailure = false;
		const res = await transporter.sendMail(mailConfigurations);
		console.log(res);



	} catch (err) {
		console.log("Error while sending email to user", err);
	}

};