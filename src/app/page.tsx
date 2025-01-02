"use client";

import { CldUploadWidget } from "next-cloudinary";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";
export default function Home() {
  return (
    <div className="                                ">
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <div className="flex h-auto flex-col items-center justify-center">
        <CldUploadWidget uploadPreset="photoalbum">
          {({ open }) => {
            return <button onClick={() => open()}>Upload Image</button>;
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
}

// <SidebarProvider defaultOpen={defaultOpen}>
//   <AppSidebar />
//   <main>

//     {children}
//   </main>
// </SidebarProvider>;
