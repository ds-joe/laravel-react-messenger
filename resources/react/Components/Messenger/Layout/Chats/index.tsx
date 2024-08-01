
// Components
import {
    MDBCol,
    MDBTypography,
    MDBInputGroup,
} from "mdb-react-ui-kit";

// Icons
import { HiSearch } from "react-icons/hi";

const Chats: RC = () => {
    return (
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0 ">
            <div className="p-3">
                <MDBInputGroup className="rounded mb-3">
                    <input
                        className="form-control rounded"
                        placeholder="Search"
                        type="search"
                    />
                    <span
                        className="input-group-text border-0"
                        id="search-addon"
                    >
                        <HiSearch />
                    </span>
                </MDBInputGroup>

                <div
                    style={{ position: "relative", height: "100%", overflowY: "auto" }}
                >
                    <MDBTypography listUnStyled className="mb-0">
                        <li className="p-2 border-bottom">
                            <a
                                href="#!"
                                className="d-flex justify-content-between"
                            >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="avatar"
                                            className="d-flex align-self-center me-3"
                                            width="60"
                                        />
                                        <span className="badge bg-success badge-dot"></span>
                                    </div>
                                    <div className="pt-1">
                                        <p className="fw-bold mb-0">Marie Horwitz</p>
                                        <p className="small text-muted">
                                            Hello, Are you there?
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <p className="small text-muted mb-1">Just now</p>
                                    <span className="badge bg-danger rounded-pill float-end">
                                        3
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="p-2 border-bottom">
                            <a
                                href="#!"
                                className="d-flex justify-content-between"
                            >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                            alt="avatar"
                                            className="d-flex align-self-center me-3"
                                            width="60"
                                        />
                                        <span className="badge bg-warning badge-dot"></span>
                                    </div>
                                    <div className="pt-1">
                                        <p className="fw-bold mb-0">Alexa Chung</p>
                                        <p className="small text-muted">
                                            Lorem ipsum dolor sit.
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                        5 mins ago
                                    </p>
                                    <span className="badge bg-danger rounded-pill float-end">
                                        2
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="p-2 border-bottom">
                            <a
                                href="#!"
                                className="d-flex justify-content-between"
                            >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                            alt="avatar"
                                            className="d-flex align-self-center me-3"
                                            width="60"
                                        />
                                        <span className="badge bg-success badge-dot"></span>
                                    </div>
                                    <div className="pt-1">
                                        <p className="fw-bold mb-0">Danny McChain</p>
                                        <p className="small text-muted">
                                            Lorem ipsum dolor sit.
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <p className="small text-muted mb-1">Yesterday</p>
                                </div>
                            </a>
                        </li>
                        <li className="p-2 border-bottom">
                            <a
                                href="#!"
                                className="d-flex justify-content-between"
                            >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                            alt="avatar"
                                            className="d-flex align-self-center me-3"
                                            width="60"
                                        />
                                        <span className="badge bg-danger badge-dot"></span>
                                    </div>
                                    <div className="pt-1">
                                        <p className="fw-bold mb-0">Ashley Olsen</p>
                                        <p className="small text-muted">
                                            Lorem ipsum dolor sit.
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <p className="small text-muted mb-1">Yesterday</p>
                                </div>
                            </a>
                        </li>


                    </MDBTypography>
                </div>
            </div>
        </MDBCol>
    )
}

export default Chats;