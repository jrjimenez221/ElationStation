import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Accounts() {
  // Setting our component's initial state
  const [accounts, setAccounts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadAccounts()
  }, [])

  // Loads all books and sets them to books
  function loadAccounts() {
    API.getAccounts()
      .then(res => 
        setAccounts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteAccount(id) {
    API.deleteAccount(id)
      .then(res => loadAccounts())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveAccount({
        user: formObject.user,
        password: formObject.password,
        noteTaker: formObject.noteTaker
      })
        .then(res => loadAccounts())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What thoughts ?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="user"
                placeholder="User (required)"
              />
              <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="noteTaker"
                placeholder="Write your thoughts! (Optional)"
              />
              <FormBtn
                disabled={!(formObject.password && formObject.user)}
                onClick={handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Notes on my mind</h1>
            </Jumbotron>
            {accounts.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={account._id}>
                    <Link to={"/accounts/" + account._id}>
                      <strong>
                        {account.user} by {account.password}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteAccount(account._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Accounts;
