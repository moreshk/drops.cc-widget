import { getBaseURL } from "@/config/url";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface SessionContextType {
  session: Session | undefined;
  status: SessionLoadingType;
  setSession: (session: Session) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SessionProvider = ({
  children,
  defaultSession,
}: {
  children: ReactNode;
  defaultSession?: Session;
}) => {
  const [session, setSessionState] = useState<Session | undefined>(
    defaultSession
  );
  const [status, setState] = useState<SessionLoadingType>(
    defaultSession ? "authenticated" : "unauthenticated"
  );

  const setSession = (session: Session) => {
    setSessionState(session);
    setState("authenticated");
  };

  const logout = async () => {
    try {
      await fetch(`${getBaseURL()}/api/auth/logout`);
      setSessionState(undefined);
      setState("unauthenticated");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SessionContext.Provider value={{ session, setSession, logout, status }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSession };
