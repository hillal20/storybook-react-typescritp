import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "../button/Button";
import "./header.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header>
      <div
        className="wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
        <div
          onClick={() => {
            console.log("hello is clicked ");
            navigate("/settings/user/one");
          }}
        >
          Hello Word{" "}
        </div>
        <div
          onClick={() => {
            console.log("home is clicked ");
            navigate("/settings/user/home");
          }}
        >
          go home
        </div>
        <Outlet />
      </div>
    </header>
  );
};
