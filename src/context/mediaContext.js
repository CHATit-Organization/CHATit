import { useState, useContext, createContext, useEffect } from "react";

const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
    const [isMedia, setIsMedia] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [friendsMedia, setFriendsMedia] = useState('')
    const [shareContact, setSharedContact] = useState({ friends: [] });
    const [shareAudio, setShareAudio] = useState(false);
    const [shareImage, setShareImage] = useState(false);
    const [shareVideo, setShareVideo] = useState(false);
    const [shareFriendsContact, setShareFriendsContact] = useState(false);


    const handleMedia = () => {
        setIsMedia(prevState => !prevState)
        if (shareFriendsContact) {
          setIsMedia(false)
        }

    }
    const handleDone = () => {
        setIsMedia(prevState => !prevState)
    }

    const handleSetFriends = (id) => {
        setFriendsMedia(id)
    }


    function loadContact(contact) {
        if (shareContact.friends.find(contacts => contacts.id === contact.id)) {
            return;
          }
        setSharedContact(prevState => ({
          ...prevState,
          friends: [...prevState.friends, contact]
        }));
      }
      function removeLoadedContact(contact) {
        setSharedContact(prevState => ({
          ...prevState,
          friends: prevState.friends.filter(contacts => contacts.id !== contact.id)
        }));
      }

      const handleShareAudio = () => {
        setShareAudio(prevState => !prevState);
        handleMedia()
      };
    
      const handleShareImage = () => {
        setShareImage(prevState => !prevState);
        handleMedia()

      };
    
      const handleShareVideo = () => {
        setShareVideo(prevState => !prevState);
        handleMedia()

      };
      const handleShareFriendsContact = () => {
        setShareFriendsContact(prevState => !prevState);
        handleMedia()

      };
    



  return (
    <MediaContext.Provider
      value={{
         setIsMedia,
         handleMedia,
         loadContact,
         removeLoadedContact,
         handleSetFriends,
         handleShareAudio,
         handleShareImage,
         handleShareVideo,
         handleShareFriendsContact,
         isMedia,
         shareAudio,
         shareImage,
         shareVideo,
         shareFriendsContact,
         friendsMedia,
         shareContact,
         setShareFriendsContact


   
        }}
    >
      {children}
    </MediaContext.Provider>
  );
  }

export const useMedia = () => useContext(MediaContext);
