import { Instrument_Sans } from 'next/font/google'
import './globals.css'

const inst = Instrument_Sans({ subsets: ['latin'] })


export const metadata = {
  title: "Quiz Forge",
  description: "Generate quizes and practice",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </head>
    <body className={inst.className}>
          <main className='app bg-bl'>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;
