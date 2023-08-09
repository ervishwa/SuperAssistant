import React, { useState } from "react";
import "./comprehensionForm.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export const ComprehensionForm = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("1");

  const handleSubmit = async () => {
    const data = {
      question,
      answers,
      correctAnswer,
    };

    try {
      const response = await fetch("https://super-lvuk.onrender.com/api/mcq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Question stored successfully!");
        setQuestion("");
        setAnswers(["", "", "", ""]);
        setCorrectAnswer("1");
      } else {
        console.error("Failed to store the question.");
      }
    } catch (error) {
      console.error("Error occurred while storing the question:", error);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <Row>
        <Col
          md={8}
          className="ml-3 comprehension"
          
        >
          <h4 className="mb-3 font-weight-bold">Comprehension type Question</h4>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="font-weight-bold mb-2">
              Correct Answer
            </Form.Label>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="type correct answer first"
                className="mb-3"
                value={answers[0]}
                onChange={(e) =>
                  setAnswers([
                    e.target.value,
                    answers[1],
                    answers[2],
                    answers[3],
                  ])
                }
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                type="text"
                className="mb-3"
                placeholder="answer2"
                value={answers[1]}
                onChange={(e) =>
                  setAnswers([
                    answers[0],
                    e.target.value,
                    answers[2],
                    answers[3],
                  ])
                }
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="answer3"
                className="mb-3"
                value={answers[2]}
                onChange={(e) =>
                  setAnswers([
                    answers[0],
                    answers[1],
                    e.target.value,
                    answers[3],
                  ])
                }
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="answer4"
                value={answers[3]}
                onChange={(e) =>
                  setAnswers([
                    answers[0],
                    answers[1],
                    answers[2],
                    e.target.value,
                  ])
                }
              />
            </InputGroup>
          </Form.Group>
          <div className="w-20 text-center mt-4">
            <Button onClick={handleSubmit} style={{backgroundColor:"green",border:"none"}}>
              Add Question
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

