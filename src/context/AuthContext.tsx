import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";
import type { CustomUser } from "../types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextI {
  user: CustomUser | null;
  loading: boolean;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextI>({
  user: null,
  loading: true,
  logIn: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as CustomUser;
          setUser(userData);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      if (!firebaseUser) return;

      const userDocRef = doc(db, "users", firebaseUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        const newUser: CustomUser = {
          id: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          username: firebaseUser.displayName ?? "",
          createdAt: new Date().toISOString(),
          password: "",
        };
        await setDoc(userDocRef, newUser);
      }
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  };

  const logOut = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined || context === null) {
    throw new Error("useAuthContext must be used inside an AuthProvider");
  }

  return context;
};
