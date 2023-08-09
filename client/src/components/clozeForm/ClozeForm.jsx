import React, { useState } from "react";
import "./clozeForm.css";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export const ClozeForm = () => {
  const [sentence, setSentence] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);

  const handleWordDoubleClick = (word) => {
    setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      sentence: sentence,
      answers: selectedWords,
    };

    fetch("https://super-lvuk.onrender.com/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add the question.");
        }
        return response.json();
      })
      .then(() => {
        setSentence("");
        setSelectedWords([]);
      })
      .catch((error) => {
        console.error("Error while adding the question:", error);
      });
  };

  return (
    <div className="mt-4 container-fluid">
      <Row>
        <Col
          md={8}
          className=" clozeform"
         
        >
          <h4 className="mb-3 font-weight-bold">Cloze type Question</h4>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="preview"
              value={sentence}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="font-weight-bold mb-2" htmlFor="sentence">
              Sentence
            </Form.Label>
            <Form.Control
              id="sentence"
              type="text"
              placeholder="Double click the word here to convert them into blanks"
              onDoubleClick={(e) => {
                const selectedWord = window.getSelection().toString().trim();
                if (selectedWord) {
                  handleWordDoubleClick(selectedWord);
                }
              }}
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="ml-4 mt-4">
            {selectedWords.length === 0 ? (
              <Form.Check>
                <Form.Control type="text" placeholder="option 1" />
              </Form.Check>
            ) : (
              selectedWords.map((word, index) => (
                <Form.Check key={index} className="mb-3">
                  <Form.Control type="text" value={word} />
                </Form.Check>
              ))
            )}
          </Form.Group>
          <div className="w-20 text-center mt-4">
            <Button onClick={handleAddQuestion} style={{backgroundColor:"green" ,border:"none"}}>
              Add Question
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

