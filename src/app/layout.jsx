import Navbar from '@/components/Navbar';
import Providers from './Providers';
import './globals.css'
import  Header  from "@/components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header*/}

          <Header />
          {/*NavBar*/}
          <Navbar />
          {/*SearchBar*/}
          {children}
        </Providers>

      </body>
    </html>
  )
}
