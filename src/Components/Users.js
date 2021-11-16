import User from "./User";

const styles = {
  userCtn: {
    backgroundColor: "white",
    margin: 10,
    padding: 2,
  },
};

const Users = ({ userState }) => {
  return (
    <div style={styles.userCtn}>
      <ul>
        {userState
          ? userState.map((userData,idx) => {
              return <User userData={userData} key={idx} />;
            })
          : null}
      </ul>
    </div>
  );
};

export default Users;
