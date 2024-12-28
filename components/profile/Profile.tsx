import { onAuthStateChanged, User } from "firebase/auth";
import { ProfileHeader } from "./ProfileHeader";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase.config";
import Loader from "../Loader";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
        else setUser(null);
    });
    console.log(user)
  }, []);

  if (!user) {
    return <Loader text="Loading Profile" />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
        {/* {JSON.stringify(user)} */}
      <ProfileHeader user={user} />
      {/* <ProfileTabs user={user} /> */}
    </div>
  );
}
