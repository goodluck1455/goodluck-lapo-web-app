import { createContext, useContext, useState, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";

// Define Profile Type
interface Profile {
  id: number;
  CardName: string;
  Currency: string;
  Expiration: string;
  BinPrefix: string;
  DateCreated: string;
}

// Define Context Type
interface ProfileContextType {
  profile: Profile[];
  addProfile: (newProfile: Omit<Profile, "id">) => void;
  editProfile: (id: number, updatedProfile: Partial<Profile>) => void;
  deleteProfile: (id: number) => void;
}

// Create Context
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile[]>([
    { id: 1, CardName: "0123456789", Currency: "Nazeer Ajibola", Expiration: "11/14/2024 10:27:43", BinPrefix: "Card Dispute", DateCreated: "Resolved" },
    { id: 2, CardName: "0123456789", Currency: "Nazeer Ajibola", Expiration: "11/14/2024 10:27:43", BinPrefix: "Card Dispute", DateCreated: "Resolved" },
    { id: 3, CardName: "0123456789", Currency: "Nazeer Ajibola", Expiration: "11/14/2024 10:27:43", BinPrefix: "Card Dispute", DateCreated: "Resolved" },
  ]);

  const addProfile = (newProfile: Omit<Profile, "id">) => {
    setProfile((prevProfile) => [...prevProfile, { id: prevProfile.length + 1, ...newProfile }]);
  };

  const editProfile = (id: number, updatedProfile: Partial<Profile>) => {
    setProfile((prevProfile) => prevProfile.map((p) => (p.id === id ? { ...p, ...updatedProfile } : p)));
  };

  const deleteProfile = (id: number) => {
    setProfile((prevProfile) => prevProfile.filter((p) => p.id !== id));
  };

  return (
    <ProfileContext.Provider value={{ profile, addProfile, editProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
