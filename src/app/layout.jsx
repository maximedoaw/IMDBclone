import Navbar from '@/components/Navbar';
import Providers from './Providers';
import './globals.css'
import  Header  from "@/components/Header";
import SearchBox from '@/components/SearchBox';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header*/}

          <Header />
          {/*NavBar*/}
          <Navbar />
          {/*SearchBox*/}
          < SearchBox/>
          {children}
        </Providers>

      </body>
    </html>
  )
}
