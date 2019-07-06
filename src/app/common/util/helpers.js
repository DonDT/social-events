export const createNewEvent = (user, photoURL, event) => {
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || "/assets/user.png",
    createdAt: new Date(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: new Date(),
        photoURL: photoURL || "/assets/user.png",
        diaplayName: user.displayName,
        host: true
      }
    }
  };
};
