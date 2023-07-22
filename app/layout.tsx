import { Nunito } from "next/font/google"

import './globals.css'
import Navbar from './components/navbar/Navbar'
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./components/providers/ToasterProvider"

export const metadata = {
  title: 'Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences',
  description: 'Airbnb clone app',
}
const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
        </body>
    </html>
  )
}
