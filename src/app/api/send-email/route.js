import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { firstName, lastName, email, subject, body } = await req.json();

        // Configure your SMTP transport
        const transporter = nodemailer.createTransport({
            host: "smtp.ionos.co.uk", // Replace with your SMTP server
            port: 587, // or 465 for secure
            auth: {
                user: "admin@aurevantholdings.com", // Replace with your SMTP username
                pass: process.env.EMAIL_PASSWORD, // Replace with your SMTP password
            },
        });

        // Send the email
        await transporter.sendMail({
            from: `"admin@aurevantholdings.com"`, // Sender address
            to: ["admin@aurevantholdings.com", "paracha_a@yahoo.com"], 
            subject: subject + " From Email: " + email,
            text: body,
        });

        return new Response(
            JSON.stringify({ message: "Email sent successfully!" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ error: "Failed to send email." }),
            { status: 500 }
        );
    }
}
