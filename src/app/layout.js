import {Raleway} from 'next/font/google'
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: "Aurevant Holdings",
  description: "Welcome to Aurevant Holdings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
