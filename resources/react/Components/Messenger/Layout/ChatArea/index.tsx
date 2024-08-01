
// Components
import {
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

// Icons
import { HiPaperAirplane, HiEmojiHappy } from 'react-icons/hi';


const ChatArea: RC = () => {
  return (
    <MDBCol md="6" lg="7" xl="8">
      <div
        style={{ position: "relative", height: "100%", overflowY: "auto" }}
        className="pt-3 pe-3 "
      >
        <div className="d-flex flex-row justify-content-start">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div>
            <p
              className="small p-2 ms-3 mb-1 rounded-3"
              style={{ backgroundColor: "#f5f6f7" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
              12:00 PM | Aug 13
            </p>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end">
          <div>
            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="small me-3 mb-3 rounded-3 text-muted">
              12:00 PM | Aug 13
            </p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
        </div>

      </div>
      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
          alt="avatar 3"
          style={{ width: "40px", height: "100%" }}
        />
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput2"
          placeholder="Type message"
        />
        <a className="ms-1 text-muted" href="#!">
          <MDBIcon fas icon="paperclip" />
        </a>
        <a className="ms-3 text-muted" href="#!">
          <HiEmojiHappy />
        </a>
        <a className="ms-3" href="#!">
          <HiPaperAirplane />
        </a>
      </div>
    </MDBCol >
  )
}

export default ChatArea;