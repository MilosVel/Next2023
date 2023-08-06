'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) =>{
  console.log('Session u Provider nigde nije prosledjena ali je u consoli: ',session)

    return( // sta je ovde session
      // <SessionProvider session={session}> // ovo je provobitna linija koda ali izgleda da ovja session prop nema 
      <SessionProvider >
        {children}
      </SessionProvider>
    )
} 

export default Provider;
