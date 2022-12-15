import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import UserList from "../components/UserList";

const UserListContainer = ({ userStore }) => {
  // const getUsers = useCallback(async () => {
  //   try {
  //     userStore.pending();
  //     const response = await axios.get("https://api.github.com/users");
  //     userStore.success(response.data);
  //   } catch (error) {
  //     userStore.fail(error);
  //   }
  // }, [userStore]);

  const users = userStore.state.users;
  // const getUsers = useCallback(() => {
  //   userStore.getUsers();
  // }, [userStore]);
  const getUsers = useCallback(() => {
    userStore.getUsersFlow();
  }, [userStore]);

  return <UserList getUsers={getUsers} users={users} />;
};

export default inject("userStore")(observer(UserListContainer));
