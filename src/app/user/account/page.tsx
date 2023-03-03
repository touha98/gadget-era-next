import UserAccount from "@/components/UserAccount";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Account = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/user/signin");
  }

  return (
    <main className="container mx-auto p-2 lg:max-w-screen-lg">
      <UserAccount />
    </main>
  );
};

export default Account;
