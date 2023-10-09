import { Modal, Fade, Skeleton } from "@mui/material";
import SliderElementProps from "../common/interfaces/SliderElementProps";
import "../styles/postPopup.scss";

interface PostPopupProps {
    open: boolean,
    post: SliderElementProps | undefined,
    onClose: () => void
}

const PostPopup: React.FC<PostPopupProps> = ({ open, post, onClose }) => {
    return <Fade in={open}>
        <Modal open>
            <div className="post-popup">
                <div className="popup-header">
                    <button onClick={onClose}>×</button>
                </div>
                <div className="popup-body">
                    {!post?.url ? <Skeleton className="popup-skeleton" /> : post?.type === "image" ? <img src={post.url} alt={post.text || ""} /> : <video src={post?.url || ""}/>}
                    {post?.text ? <p dir="auto" className="popup-text">{post?.text}</p> : undefined}
                </div>
            </div>
        </Modal>
    </Fade>
}

export default PostPopup;