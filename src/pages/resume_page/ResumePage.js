import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import pdf from "../../assets/Yatin.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";
import React, { useState, useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  // Remove unused: const [numPages, setNumPages] = useState(null);
  const [pageError, setPageError] = useState(null);
  const [pdfLoadingState, setPdfLoadingState] = useState('initial');

  useEffect(() => {
    setWidth(window.innerWidth);

    const checkPdfFile = async () => {
      try {
        const response = await fetch(pdf);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        console.log('PDF file size:', blob.size, 'bytes');
        setPdfLoadingState('file_exists');
      } catch (error) {
        console.error('PDF file fetch error:', error);
        setPdfLoadingState('file_error');
        setPageError(error.toString());
      }
    };

    checkPdfFile();
  }, []);

  function onDocumentLoadSuccess() {
    setPdfLoadingState('loaded');
  }

  function onDocumentLoadError(error) {
    console.error("PDF load error:", error);
    setPdfLoadingState('load_error');
    setPageError(error.toString());
  }

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>
            <div fluid className="certificate-section" id="about">
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
              <div className="resume d-flex justify-content-center">
                {pageError && (
                  <div style={{ color: 'red' }}>
                    <h3>Error Loading Resume</h3>
                    <p>Error details: {pageError}</p>
                    <p>PDF Loading State: {pdfLoadingState}</p>
                  </div>
                )}
                {pdfLoadingState === 'loaded' && (
                  <Document
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                  >
                    <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4} />
                  </Document>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
