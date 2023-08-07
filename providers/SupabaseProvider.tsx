"use client"

import { Database } from "@/types_db"
import { useState } from "react";
import { SupabaseClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"

interface SupabaseProviderProps{
    children: React.ReactNode;

};

const SupabaseProviderProps: React.FC<SupabaseProviderProps> =({
    children
}) =>{
    const [supabaseClient] = useState(() =>
    
    createClientComponentClient <Database>());

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>

            {children}

        </SessionContextProvider>
    )
}
