import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar flex justify-between bg-base-300">
      <a className="btn-ghost btn text-xl normal-case">Tasketeer</a>
      <div>
        {sessionData ? (
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn m-2 font-bold">
              {sessionData.user?.name}
              {sessionData.user?.image && (
                <div className="avatar ml-4">
                  <div className="rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                    <Image
                      src={sessionData.user.image}
                      alt="User avatar"
                      width="25"
                      height="25"
                    />
                  </div>
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-base-200 p-2 shadow"
            >
              <li>
                <button
                  onClick={
                    sessionData ? () => void signOut() : () => void signIn()
                  }
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn m-1 font-bold" onClick={() => void signIn()}>
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
