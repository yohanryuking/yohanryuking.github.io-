import { useState, useEffect } from 'react';
import Login from './modules/Login';
import Admin from './modules/Admin';
import { supabase } from './supabase'; // Assuming you have a supabase client file

const Controller = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return session ? <Admin /> : <Login />;
};

export default Controller;
