import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { link } from "fs";
import Image from "next/image";
Image


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Randhir" ,lastName:"Singh"};
  return (
    <main className="flex h-screen font-inter">
        <SideBar user={loggedIn}/>
        <div className="flex size-full flex-col">
           <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
           </div>
        {children}
        </div>
    </main>
  );
}
