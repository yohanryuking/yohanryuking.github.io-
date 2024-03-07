import { useState, useEffect } from 'react';
import Login from './modules/Login';
import Admin from './modules/Admin';
import { supabase } from './Client'; // Assuming you have a supabase client file

const Controller = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session ? <Admin /> : <Login />;
};

export default Controller;
