import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Members } from "../domains/Members";

interface Props {
  children: ReactNode;
  isLoading: boolean;
  member?: Members;
  loginRequired?: boolean;
}

const Auth = ({
  member,
  children,
  isLoading,
  loginRequired = false,
}: Props) => {
  const { pathname } = useLocation();
  // const { accessToken } = getTokens();
  const accessToken :string= null;

  const [requiredStaticPage, setRequiredStaticPage] = useState<string>();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if ((!member || !accessToken) && loginRequired) {
      console.log('hit auth')
      console.log(member)
      console.log(accessToken)
      setRequiredStaticPage("login");
    } else if (member) {
      setRequiredStaticPage(member.grade);
    }
  }, [isLoading, member, accessToken, pathname]);
  
console.log('hit auth')
console.log(requiredStaticPage)
  if (requiredStaticPage === "login") {
    console.log('go login')
    return (
      <Navigate
        // replace={true}
        // state={{ isAutoLogout: window.history.state?.isAutoLogout || false }}
        to="/login"
      />
    );
  }else {
    return  <>{children}</>;
  }
  // switch (requiredStaticPage) {
  //   case "login":
  //     return (
  //       <Navigate
  //         replace={true}
  //         state={{ isAutoLogout: window.history.state?.isAutoLogout || false }}
  //         to="/login"
  //       />
  //     );
  //   case Members.GRADE.NEW:
  //     return (
  //       <Navigate
  //         replace={true}
  //         state={{ isAutoLogout: window.history.state?.isAutoLogout || false }}
  //         to="/new"
  //       />
  //     );
  //   case Members.GRADE.BASIC:
  //     return <>{children}</>;
  //   default:
  //     return (
  //       <Navigate
  //         replace={true}
  //         state={{ isAutoLogout: window.history.state?.isAutoLogout || false }}
  //         to="/login"
  //       />
  //     );
  // }
};

export default Auth;
