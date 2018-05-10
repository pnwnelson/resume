import React, { Component } from "react";
import moment from "moment";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    overflowy: "auto",
    height: "80%",
    width: "80%"
  }
};

export default class WorkItem extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // Need to hide an the HTML element if the json key "workExamples" exists.
    // Check the JSON object for the key "workExamples"
    if (this.props.workItemData.workExamples) {
      // Change element styling to visible
      document.getElementById("work-examples").style.visibility = "visible";
    } else {
      // stay hidden
      return;
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  getWorkDates() {
    const startdate = moment(this.props.workItemData.startDate).format(
      "MMM, YYYY"
    );
    let enddate = null;
    if (this.props.workItemData.endDate !== "") {
      enddate = moment(this.props.workItemData.endDate).format("MMM, YYYY");
    } else {
      enddate = "Present";
    }

    return (
      <span className="startdate">
        {startdate} - {enddate}
      </span>
    );
  }

  render() {
    return (
      <div>
        <hr className="hr-right-side" />
        <div className="work-title">
          <h4>
            {this.props.workItemData.position} at{" "}
            <span className="entity-name">
              {this.props.workItemData.company}
            </span>
          </h4>
          <span id="work-examples" className="work-examples">
            <button className="btn-modal-open" onClick={this.openModal}>
              Examples of Work
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <div className="modal-title-bar">
                <h2 className="modal-title">
                  {this.props.workItemData.company} Landing Pages
                </h2>
                <button className="btn-modal-close" onClick={this.closeModal}>
                  close
                </button>
              </div>
              <div>
                <ul className="list-unstyled">
                  {this.props.workItemData.workExamples &&
                    this.props.workItemData.workExamples.map(function(item, i) {
                      return (
                        <li key={i}>
                          <img className="modal-image" src={item.img} />
                          <hr />
                        </li>
                      );
                    })}
                </ul>
              </div>
            </Modal>
          </span>
        </div>
        <div className="work-dates-summary">
          <p className="dates">{this.getWorkDates()}</p>
          <p>{this.props.workItemData.summary}</p>
        </div>
      </div>
    );
  }
}
