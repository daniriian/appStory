import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Modal from "@material-ui/core/Modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdf.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/SaveAlt";
import PrintIcon from "@material-ui/icons/Print";
import CloseIcon from "@material-ui/icons/Close";
import printJS from "print-js";

class Pdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      isModalOpen: true
    };
  }

  handleClose = () => {
    this.setState({
      isModalOpen: false,
      numPages: null
    });
  };

  handleSave = () => {
    const linkSource = this.props.data;
    const downloadLink = document.createElement("a");
    const fileName = this.props.fileName;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  handlePrint = () => {
    var data = this.props.print;
    var byteCharacters = atob(data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);

    const pdfBlob = new Blob(byteArray, { type: "application/pdf" });
    const url = URL.createObjectURL(pdfBlob);
    printJS(pdfBlob, "pdf");
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages, isModalOpen } = this.state;

    return (
      <Modal
        open={isModalOpen}
        style={{ overflowY: "scroll", textAlign: "center" }}
        onClose={this.props.handleCloseModal}
      >
        <div className="container__document">
          <AppBar id="appBar" className="bg-dark text-light">
            <Toolbar className="ml-auto">
              <IconButton
                href="#"
                onClick={this.handlePrint}
                color="inherit"
                aria-label="Save"
              >
                <PrintIcon />
              </IconButton>
              <IconButton
                href={this.props.data}
                onClick={this.handleSave}
                color="inherit"
                aria-label="Save"
              >
                <SaveIcon />
              </IconButton>
              <IconButton
                onClick={this.props.handleCloseModal}
                color="inherit"
                className="mx-3"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div id="test">
            <Document
              file={this.props.data}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              {Array.from(
                new Array(this.props.pages || numPages), //show first 'this.props.pages' pages or all pages
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={1.5}
                  />
                )
              )}
            </Document>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Pdf;
