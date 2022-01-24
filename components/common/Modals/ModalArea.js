import EditUserModal from "./EditProfileModal";
import LoginModal from "./LoginModal";

export default function ModalArea (props) {

    return (
        <>
            {
                props.isAuthModal && <LoginModal setShowModal={props.setShowModal} showModal={props.showModal} isSignIn={props.isLogin} isSignUp={props.isSignUp}/>
            }
            {
                props.isEditProfileModal && <EditUserModal setShowModal={props.setShowModal} showModal={props.showModal} />
            }
        </>
    )
}